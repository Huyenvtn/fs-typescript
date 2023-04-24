interface IDiary {
  id: number,
  title: string
}
type DiaryAction = {
  type: string,
  diary: IDiary
}

type DispatchType = (args: DiaryAction) => DiaryAction