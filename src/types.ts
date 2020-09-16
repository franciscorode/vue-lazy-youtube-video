export interface LoadIframeEventPayload {
  iframe?: HTMLIFrameElement
}

export interface InitPlayerEventPayload {
  instance: YT.Player
}

export interface Refs {
  iframe?: HTMLIFrameElement
}

export interface Thumbnail {
  webp: string
  jpg: string
}
