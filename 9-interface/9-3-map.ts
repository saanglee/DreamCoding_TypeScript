type Video = {
  title: string;
  author: string;
  description: string;
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type VideoOptional = Optional<Video>;

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type VideoReadOnly = ReadOnly<Video>;

// test code

const videoOp: VideoOptional = {
  author: "Bomi",
  // animal: // ERROR
};

const video: VideoReadOnly = {
  title: "cat",
  author: "cat",
  description: "cute cat",
};

// video.title =  // ERROR: Cannot assign to 'title' because it is a read-only property

// 예제

type Nullable<T> = {};
