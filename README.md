# interview-kiun-lee-june-2021
책장 시스템 만들기
- 유저는 계정을 생성하고 로그인 할 수 있습니다.
- 유저는 서버에 저장된 책 목록을 볼 수 있습니다.
- 책들은 제목, 저자, 출판사명, 출간일을 가지고 있습니다.
- 유저는 서버에 없는 책을 추가할 수 있습니다.
- 추가한 책은 다른 유저도 볼 수 있습니다.
- 추가한 책은 삭제할 수 있으나 해당 권한은 최초로 책을 추가한 유저에게만 있습니다.
- 본인이 추가한 책이라도 다른 유저의 책장에 추가되어 있다면 삭제할 수 없습니다.
- 유저는 전체 목록 중에서 책을 골라 본인의 책장에 추가할 수 있습니다.
- 책장에서 책을 삭제할 수도 있습니다.
- 책장에 저장된 책에는 메모를 남기고 수정, 삭제할 수 있습니다.
- 아래 동작은 REST API를 통해 서버에 전달 및 DB에 저장되어야 합니다. 이 동작들은 Postman, cURL 등의 도구로 테스트 가능해야 합니다.
    1. 계정 생성 및 로그인
    2. 전체 책 목록 가져오기
    3. 전체 책 목록에 새 책 추가/삭제하기
    4. 책장에 책 추가/삭제하기
    5. 책장에 있는 책에 메모 추가/수정/삭제하기

- 서버에 저장되는 책 목록은 자유롭게 설정해주세요. 기능을 설명할 수 있는 세팅이면 됩니다.

- 아래의 추가 요구사항은 선택 사항입니다. 시간 여유가 된다면 도전해주세요.
    - 추가 1: 제목, 저자, 출판사명, 출간일이 겹치는 책은 추가할 수 없도록 DB를 활용해서 구현해봅니다.
    - 추가 2: 유닛 및 E2E 테스트를 작성합니다.

- 유의사항: UI 및 그래픽 요소는 평가에 포함되지 않습니다. 기능을 보여줄 수 있는 최소한의 요소만 사용하시면 됩니다.
