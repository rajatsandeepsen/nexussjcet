import { codeToHtml } from 'shiki'

export async function CodeBlock({code}:{code:string}) {
  const out = await codeToHtml(code, {
    lang: 'ts',
    theme: 'github-dark'
  })

  // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
  return <div dangerouslySetInnerHTML={{ __html: out }} />
}