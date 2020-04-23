import styled, { createGlobalStyle } from 'styled-components';
import Stats from '../components/Stats'
import CountrySelector from '../components/CountrySelector'
//  css in js js 代码里写css
//  jsx html in js ts react

//styled-components界面样式组件
const Wrapper = styled.div`
  color: blue
`
const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`
// 作用于当前组件， 不影响其他地方
export default function IndexPage() {
  return (
    <div>Next, ssr in react!
      <GlobalStyle/>
      {/* <Wrapper>
        Hello world!
      </Wrapper> */}
      <Stats url="https://covid19.mathdro.id/api">
      </Stats>
      <CountrySelector></CountrySelector>
    </div>
    
  )
}