export interface ADRSection {
  title: string
  body: string
}

export interface ADR {
  id: string
  fileName: string
  title: string
  date: string
  projectTag: string
  readTime: string
  status: 'ACCEPTED' | 'PROPOSED' | 'SUPERSEDED'
  summary: {
    context: string
    decision: string
    tradeoff: string
  }
  sections: ADRSection[]
}
