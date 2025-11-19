import { useEffect, useState } from 'react'
import { Upload, Film, Image as ImageIcon, File as FileIcon, PlayCircle, Loader2 } from 'lucide-react'

export default function Editor() {
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [templates, setTemplates] = useState([])
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [files, setFiles] = useState([])
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState([])
  const [processing, setProcessing] = useState(false)
  const [preview, setPreview] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${backend}/api/templates`)
        const data = await res.json()
        setTemplates(data)
        if (data?.length) setSelectedTemplate(data[0].id)
      } catch (e) {
        console.error(e)
        setError('Could not load templates')
      }
    }
    load()
  }, [backend])

  const onPick = (e) => {
    setFiles(Array.from(e.target.files || []))
    setUploaded([])
    setPreview(null)
    setError('')
  }

  const upload = async () => {
    if (!files.length) return
    setUploading(true)
    setError('')
    try {
      const fd = new FormData()
      for (const f of files) fd.append('files', f)
      const res = await fetch(`${backend}/api/upload`, { method: 'POST', body: fd })
      if (!res.ok) throw new Error('Upload failed')
      const data = await res.json()
      setUploaded(data.files || [])
    } catch (e) {
      setError(e.message)
    } finally {
      setUploading(false)
    }
  }

  const instantEdit = async () => {
    if (!selectedTemplate) {
      setError('Pick a template')
      return
    }
    if (!uploaded.length) {
      setError('Upload media first')
      return
    }
    setProcessing(true)
    setError('')
    try {
      const body = {
        template_id: selectedTemplate,
        assets: uploaded.map(a => a.url),
        title: 'Quick Cut',
        subtitle: 'Generated instantly',
      }
      const res = await fetch(`${backend}/api/instant-edit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      if (!res.ok) throw new Error('Instant edit failed')
      const data = await res.json()
      setPreview(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setProcessing(false)
    }
  }

  const fileIcon = (name = '') => {
    const n = (name || '').toLowerCase()
    if (n.match(/\.(mp4|mov|mkv|webm)$/)) return <Film className="h-4 w-4" />
    if (n.match(/\.(jpg|jpeg|png|gif)$/)) return <ImageIcon className="h-4 w-4" />
    return <FileIcon className="h-4 w-4" />
  }

  return (
    <section id="editor" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Instant Editor</h2>
          <p className="mt-2 text-blue-200/90">Upload media, pick a template, and get an instant preview.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Controls */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <label className="block text-sm text-blue-200/80 mb-2">Template</label>
              <select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="w-full rounded-lg bg-white/10 px-3 py-2 text-white outline-none ring-1 ring-white/15 focus:ring-blue-500/50"
              >
                {templates.map(t => (
                  <option key={t.id} value={t.id}>{t.name} • {t.aspect_ratio}</option>
                ))}
              </select>
              {templates.length === 0 && (
                <p className="mt-2 text-xs text-blue-300/70">No templates loaded.</p>
              )}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <label className="block text-sm text-blue-200/80 mb-2">Upload Media</label>
              <input
                type="file"
                multiple
                onChange={onPick}
                accept="image/*,video/*,.pdf,.zip,.mp3,.wav,.aac,.m4a"
                className="w-full text-sm text-blue-100 file:mr-4 file:rounded-md file:border-0 file:bg-blue-500 file:px-4 file:py-2 file:text-white hover:file:bg-blue-600"
              />
              <button
                onClick={upload}
                disabled={!files.length || uploading}
                className="mt-3 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white font-semibold hover:bg-blue-600 disabled:opacity-50"
              >
                {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
                {uploading ? 'Uploading...' : 'Upload'}
              </button>

              {files.length > 0 && (
                <div className="mt-4 space-y-2 text-sm text-blue-200/80 max-h-40 overflow-auto">
                  {files.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {fileIcon(f.name)}
                      <span className="truncate">{f.name}</span>
                    </div>
                  ))}
                </div>
              )}

              {uploaded.length > 0 && (
                <div className="mt-4 border-t border-white/10 pt-3 space-y-2 text-sm text-blue-200/80 max-h-40 overflow-auto">
                  {uploaded.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {fileIcon(f.original)}
                      <a href={f.url} target="_blank" rel="noreferrer" className="truncate hover:text-white">{f.original}</a>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={instantEdit}
                disabled={!uploaded.length || !selectedTemplate || processing}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-white font-semibold hover:bg-emerald-600 disabled:opacity-50"
              >
                {processing ? <Loader2 className="h-4 w-4 animate-spin" /> : <PlayCircle className="h-5 w-5" />}
                {processing ? 'Processing...' : 'Instant Edit'}
              </button>
              {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
            </div>
          </div>

          {/* Right: Preview */}
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5 min-h-[360px] flex items-center justify-center">
            {!preview && (
              <div className="text-center text-blue-200/80">
                <p>Preview will appear here after instant edit.</p>
              </div>
            )}
            {preview && (
              <div className="w-full">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{preview.template?.name}</p>
                    <p className="text-xs text-blue-300/70">{preview.notes}</p>
                  </div>
                  <a href={preview.preview_url} target="_blank" rel="noreferrer" className="text-sm text-blue-300 hover:text-white underline">Open Source</a>
                </div>

                {preview.preview_type === 'video' ? (
                  <video src={preview.preview_url} controls className="w-full max-h-[520px] rounded-lg border border-white/10" />
                ) : preview.preview_type === 'image' ? (
                  <img src={preview.preview_url} alt="preview" className="w-full max-h-[520px] object-contain rounded-lg border border-white/10" />
                ) : (
                  <div className="p-8 text-center text-blue-200/80">No media preview available.</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
