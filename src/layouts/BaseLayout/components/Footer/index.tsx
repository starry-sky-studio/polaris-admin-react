import imgUrl from '@/assets/favicon.ico'
export default function Footer() {
  return (
    <Layout.Footer className="h-16  border-t border-t-slate-300 dark:border-t-black flex justify-center items-center  ">
      <div className="h-full flex justify-center items-center gap-2">
        <span>
          {AppMetadata.APP_NAME} - v{AppMetadata.VERSION}
        </span>
        <span>©</span>
        <img
          className="-mb-2 cursor-pointer pb-2 transition-all hover:-translate-y-1 hover:scale-110 active:-translate-y-0 active:scale-105 active:opacity-75"
          src={imgUrl}
          alt=""
          loading="eager"
          width="26"
          onClick={() => BrowserUtils.openNewWindow(AppMetadata.REPO_GITHUB_URL)}
        />
        <span>{AppMetadata.TEAM_NAME}</span>
      </div>
    </Layout.Footer>
  )
}
