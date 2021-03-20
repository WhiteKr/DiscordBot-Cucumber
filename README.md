# Cucumber Bot on Discord (Previous)

JavaScript로 작성된 Discord 전용 챗봇입니다.

Discord 내에서 eval을 이용해 코드 테스트를 할 때 사용했기 때문에
기능은 eval 뿐입니다.

현재는 TypeScript로 개발된, 더 효율적이고 더 많은 기능을 포함하고 있는
[Cucumber 봇](https://github.com/WhiteKr/Cucumber)을 사용중입니다.


## 기능

### eval
코드를 수정해 봇을 재구동 할 필요 없이 Discord 내에서 바로 코드를 사용해보고자 넣은 기능입니다.

메시지가 `ev`로 시작할 경우 해당 접두를 제외한 메시지의 내용을 코드로 실행해 결과를 전송합니다.
