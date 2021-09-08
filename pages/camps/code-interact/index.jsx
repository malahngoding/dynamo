import { PrimaryButton } from '@/components/design/button'
import LayoutWrapper from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { useTheme } from 'next-themes'

import dynamic from 'next/dynamic'
import { useRef, useState } from 'react'

const DynamicEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false })

export default function Code() {
  const editorRef = useRef(null)

  const { theme } = useTheme()

  const [evaluated, setEval] = useState('')

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor
  }

  const showValue = () => {
    const value = editorRef.current.getValue()

    setEval(eval(value))
  }

  const resetValue = () => {}

  return (
    <LayoutWrapper>
      <PageSeo
        title={siteMetadata.titleHandler('Code Interact')}
        description={siteMetadata.description}
      />
      <div className="flex flex-row">
        <DynamicEditor
          width="70vw"
          height="50vh"
          theme={theme === 'dark' ? 'vs-dark' : 'light'}
          defaultLanguage="javascript"
          defaultValue="// Tulis kode mu disini"
          className="flex-1"
          onMount={handleEditorDidMount}
        />
        <div style={{ width: '30vw' }} className="m-2">
          <div>
            <PrimaryButton variant="normal" className="text-xs" onClick={showValue}>
              Jalankan
            </PrimaryButton>
            <PrimaryButton className="ml-2 text-xs text-bold" onClick={resetValue}>
              Set Ulang
            </PrimaryButton>
          </div>
          <div>
            <p className="text-sm mt-2">Output :</p>
            {evaluated}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
