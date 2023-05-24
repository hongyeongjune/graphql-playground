# graphql-playground

### React / TypeScript
> https://github.com/hwasurr/graphql-book-fullstack-project
> GraphQL과 타입스크립트로 개발하는 웹 서비스

### Spring-GraphQL
> https://techdozo.dev/category/microservices/graphql/

#### GraphQL operation
A GraphQL service can support the following operations

1. **Queries**: queries represent READ operations.
2. **Mutation**: mutation involves WRITE then READ operation.
3. **Subscription**: subscription is used for continuous READ (for example, over WebSocket).

#### Server transport
GraphQL specification itself doesn’t talk anything about transport layer protocol. GraphQL over HTTP specification extends GraphQL specification to **cover the topic of serving GraphQL services over HTTP**.

As per GraphQL over HTTP specification, requests must use **HTTP POST with request details included as JSON in the request body**. Once the JSON body has been successfully decoded, the HTTP response status is always **200 (OK)**, and any errors from GraphQL request execution appear in the “errors” section of the GraphQL response.
> GraphQL over HTTP 사양에 따르면, 요청들은 요청 본문에 JSON 으로 포함된 요청 세부 정보가 포함된 HTTP POST 를 사용해야 합니다. JSON 본문이 성공적으로 Decoding 되면 HTTP 응답 상태는 항상 200(OK)이며 GraphQL 요청 실행에서 발생하는 모든 오류는 GraphQL 응답의 "errors" 섹션에 나타납니다.

The default and preferred choice of the media type is "application/graphql+json" , but "application/json" is also supported.

#### RuntimeWiring
GraphQL Java RuntimeWiring.Builder is used to register DataFetchers, type resolvers, custom scalar types, and more. You can declare RuntimeWiringConfigurer beans in your Spring config to get access to the RuntimeWiring.Builder.
