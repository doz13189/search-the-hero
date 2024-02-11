import { NextPage, NextPageContext } from 'next'
// biome-ignore lint/suspicious/noShadowRestrictedNames:
import Error from 'next/error'
interface Props {
  statusCode?: number
}

const ErrorPage: NextPage<Props> = ({ statusCode }) => {
    return "An error occurred on client."
//   return statusCode ? (
//     <Error statusCode={statusCode}></Error>
//   ) : (
    
//   )
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default ErrorPage