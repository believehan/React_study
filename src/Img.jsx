/* 
        < Webpack 의 require.context() 을 이용한 동적 리소스 로드 >

- 앞서 예제에서와같이 public 폴더를 이용하면, Webpack 을 사용할 수 없으므로
  최적화가 떨어지고 require 함수나 import 구문은 실질적인 동적 리소스 로드가 불가.
  따라서 Webpack 에서 제공되는 require.context() 를 이용함으로써, 적용한 해당 개별
  컴포넌트 내에서는 동적 리소스 처리가 가능.
  ( 전역 적용을 하기 위해서는 Context API 필요 )
  
  require.context() 를 이용하면 폴더 내 지정한 모든 이미지 파일들을 미리 번들링
  함으로써, 이후 동적 리소스 로드가 가능하고, 정적 리소스를 JS 번들에 포함함으로써,
  이미지 필요시마다 별도의 네트워크 요청이 필요치 않아 네트워크 요청이 감소되는 장점.
  단, 내 지정한 모든 파일이 번들에 포함됨으로써, 이미지가 많으면 전체 Webpack 의
  크기가 비대해져 초기 로딩과정등에서 비효율적일 수 있고 메모리 소비가 증대.
  하지만 리소스를 사용하는 개별 컴포넌트 별로 별도 적용을 한다고 해서 Webpack 에
  리소스가 중복되어 저장되는 것은 아니며, 이는 Webpack 이 내부적으로 모듈 캐싱을
  수행하여 이미 로드된 파일은 다시 번들에 포함하지 않음으로써, 각 컴포넌트에서
  개별적으로 호출해도 동일한 번들에서 공유하여 사용.

  require.context() 를 사용한 번들링 경로는 아래와같이 다중 지정이 가능하여
  세분화된 관리를 통해, 프로젝트에 필요한 리소스만 번들링함으로써 효율적인 통합
  관리가 가능.
  
  예시>  const icons = require.context("../assets/icons", false, /\.(png|svg)$/);
         const banners = require.context("../assets/banners", false, /\.(jpg|png)$/);

  프로젝트 내 개별 컴포넌트가 같은 require.context() 를 사용할 경우, 각 컴포넌트에서
  require.context()를 매번 호출하는 것이 비효율적일 수 있으므로, 이런 경우 Context API
  로 전역 관리를 하는 것이 바람직.

  ===================================================================================

  형식  :  require.context(directory, useSubdirectories, regExp)

1. directory(필수) : 탐색할 디렉터리에 대한 상대경로 지정.( 상대경로만 지정 가능 )
                     상대 경로는 현재 파일을 기준으로 지정.

2. useSubdirectories (선택, 기본값: true) : 하위 디렉터리까지 검색할지 여부를 지정.
                                            - true : 지정한 폴더의 모든 하위 폴더까지 탐색.
                                            - false : 지정한 폴더 내부의 파일만 탐색.

3. regExp (선택, 기본값: /^.*$/) : 가져올 파일의 패턴을 정의하는 정규식을 지정.

                                   예시>  /\.js$/   →     확장자 .js 파일만 가져옴.

*/
export default function Img({ src, alt }) {
    return <img src={src} alt={alt} />;
}