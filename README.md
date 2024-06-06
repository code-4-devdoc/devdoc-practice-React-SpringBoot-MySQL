# 전체 개요  
### React : localhost:3000  
### Spring : localhost:8080  
### MySQL : localhost:3306 (127.0.0.1)
<br/>
>> User 테이블 테스트 X
<br/>
>> Resume{id}
<br/>
>> Skill{id, resumeId, title, content}
<br/>
>> Project{id, resumeId, title, content, period, current}
<br/>
>> 크램폴린에 MySQL을 올리게 되면 좀 많이 복잡해질듯
<br/>
<br/>
<br/>

# API 명세서
## `/api/resumes` 엔드포인트:

- `GET`: 모든 Resume 조회 (resume_id만)
> (사용자의) 이력서 '목록' 조회

- `POST`: 새로운 Resume 생성 (resume_id만)
> 이력서 테이블 생성

- `GET /api/resumes/{id}`: 특정 Resume 조회 (Skill 및 Project 포함)
> 이력서{id}의 모든 테이블들 조회

- `DELETE /api/resumes/{id}`: 특정 Resume 삭제 (연관된 Skill 및 Project 포함)
> 이력서{id}의 모든 테이블들 삭제
<br/>

## `/api/resumes/{resume_id}/skills` 엔드포인트:

- `GET`: 특정 Resume의 모든 Skill 조회
> 이력서{id}의 모든 Skill 테이블들 조회

- `DELETE`: 득정 Resume의 모든 Skill 삭제
> 이력서 선택페이지에서 Skill 필드 비활성화 ~ 이력서{id}의 모든 Skill 테이블들도 함께 삭제? (필요없을지도)

- `POST`: 새로운 Skill 생성
> 이력서{id}에 Skill 테이블 생성

- `GET /api/resumes/{resume_id}/skills/{id}`: 특정 Skill 조회
> 이력서{id}의 Skill{id}의 테이블 조회 (얘도 필요없을지도)

- `PUT /api/resumes/{resume_id}/skills/{id}`: 특정 Skill 수정
> 이력서{id}의 Skill{id}의 테이블 수정

- `DELETE /api/resumes/{resume_id}/skills/{id}`: 특정 Skill 삭제
> 이력서{id}의 Skill{id}의 테이블 삭제
<br/>

## `/api/resumes/{resume_id}/projects` 엔드포인트:

- `GET`: 특정 Resume의 모든 Project 조회
> 이력서{id}의 모든 Project 테이블들 조회

- `DELETE`: 특정 Resume의 모든 Project 삭제
> 이력서 선택페이지에서 Project 필드 비활성화 ~ 이력서{id}의 모든 Project 테이블들도 함께 삭제? (필요없을지도)

- `POST`: 새로운 Project 생성
> 이력서{id}에 Project 테이블 생성

- `GET /api/resumes/{resume_id}/projects/{id}`: 득정 Project 조회
> 이력서{id}의 Project{id}의 테이블 조회 (얘도 필요없을지도)

- `PUT /api/resumes/{resume_id}/projects/{id}`: 특정 Project 수정
> 이력서{id}의 Project{id}의 테이블 수정

- `DELETE /api/resumes/{resume_id}/projects/{id}`: 특정 Project 삭제
> 이력서{id}의 Project{id}의 테이블 삭제
<br/>
<br/>
<br/>

# 메모장
## Postman - Request Example
![postman_example](https://github.com/code-4-devdoc/devdoc-practice-React-SpringBoot-MySQL/assets/130027416/9a6c12f2-0d78-47fc-b416-b4442ff45711)
<br/>
<br/>

## Swagger-UI (Spring 3.3.0 기준)  
build.gradle  --  파일에 추가
> implementation 'org.springdoc:springdoc-openapi-starter-webmvc-ui:2.0.2'
<br/>
localhost:8080/swagger-ui/index.html  --  이 주소로 접속 가능
<br/>
<br/>

## MySQL Driver (Spring 3.3.0 기준)  
build.gradle  --  파일에 추가
> implementation group: 'com.mysql', name: 'mysql-connector-j'
