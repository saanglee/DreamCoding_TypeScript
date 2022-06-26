{
  /* Partial type */
  type ToDo = {
    title: string;
    descript: string;
    label: string;
    priority: "high" | "low";
  };

  // fieldsToUpdate : ToDo type 있는 것들 중에서 변경 가능
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: "learn TS",
    descript: "study hard!",
    label: "study",
    priority: "high",
  };

  const updated = updateTodo(todo, { priority: "low" });
  // todo기존 데이터 유지하면서 priority만 변경
  console.log(updated);

  /* Pick type */

  type Video = {
    id: string;
    title: string;
    url: string;
    dataS: string;
  };

  type VideoMetadata = Pick<Video, "id" | "title">;
  // 기존 타입에서 원하는 속성만 가져와서 제한적으로 사용할  수 있다.
  /* 
   Omit type 
   Pick과 반대로 원하는 속성만 제외 가능 
   같은 코드
   type VideoMetadata = Omit<Video, "url" | "data">;
   */

  function getVideoMetatdata(id: string): VideoMetadata {
    return {
      id,
      title: "title",
    };
  }

  /* Record type */
  type PageInfo = {
    title: string;
  };

  type Page = "home" | "about" | "contact";

  // 위 두 타입을 묶을 수 있는 것이 Record type
  // 한 Page 당 PageInfo를 연결 -> Page는 key, PageInfo가 value
  const nav: Record<Page, PageInfo> = {
    home: { title: "aa" },
    about: { title: "bb" },
    contact: { title: "cc" },
  };

  /* 그 외 */
}
