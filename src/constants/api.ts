const END_POINT = {
  /* user end point */
  login: "/auth/login",
  signup: "/auth/signup",
  memberSummary: "/members/summary",
  emailValidation: "/members/validations/email",
  nicknameValidation: "/members/validations/nickname",
  emailVerification: "/members/email/verification",
  modifyEmail: "/members/email",
  modifyProfile: "/members",
  authorizationUrl: (providerType: string) =>
    `/oauth/${providerType}/authorization-url`,
  socialLogin: (providerType: string) => `/oauth/${providerType}/login`,

  /* comment end point */
  createComment: "/comments",
  modifyComment: (commentId: number) => `/comments/${commentId}`, // PUT, DELETE
  replyComment: (parentId: number, page: number, size: number, sort: string) =>
    `comments/${parentId}/replies?page=${page}&size=${size}&sort=${sort}`,
  myComment: (page: number, size: number, sort: string) =>
    `/members/comments?page=${page}&size=${size}&sort=${sort}`,
  componentComment: (
    componentId: number,
    page: number,
    size: number,
    sort: string,
  ) =>
    `components/${componentId}/comments?page=${page}&size=${size}&sort=${sort}`,
  like: (commentId: number) => `/comment-likes/${commentId}`, // POST, DELETE

  /* component end point */
  componentDetail: (componentId: number) => `/components/${componentId}`,
  componentList: (
    page: number = 0,
    size: number = 10,
    types: string = "",
    sort: string = "asc",
  ) => `/components?&types=${types}&page=${page}&size=${size}&sort=${sort}`,
  searchComponent: (
    page: number = 0,
    size: number = 10,
    keyword: string = "",
  ) => `/components/search?keyword=${keyword}&page=${page}&size=${size}`,

  /* notice end point */
  notice: "/notices",

  /* faqs end point */
  faqs: (type: string, sort: string) => `/faqs?type=${type}&sort=${sort}`,

  /* bookmark end point */
  bookmark: "/bookmarks", // POST, DELETE
  getBookmark: (type: string, sortType: string, page: number, size: number) =>
    `/bookmarks?type=${type}&sortType=${sortType}&page=${page}&size=${size}`,

  /* report end point */
  report: (commentId: number) => `/reports/comments/${commentId}`,

  /* image upload end point */
  imageUpload: "/images/upload",
  imageMove: "/move",

  /* design system */
  searchDesignSystem: "design-systems/search",
  designSystemSummary: "design-systems",
};

export default END_POINT;
