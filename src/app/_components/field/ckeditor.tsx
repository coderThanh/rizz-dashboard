//
import { CKEDIT_LINCENSE_KEY } from "@/ultil/const";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

type FieldEditorProps = {
  classname?: string
  data?: string
  minHeight?: string
  maxHeight?: string
  onChange?: (data: string) => void
}

export default function FieldEditor(props: FieldEditorProps) {
  return <div
    className={`${props?.classname ?? ''} sys-editor`}
    style={{
      '--edit-min-h': props?.minHeight ?? '',
      '--edit-max-h': props?.maxHeight ?? '',
    } as any}
  >
    <CKEditor
      editor={ClassicEditor}
      config={{
        licenseKey: CKEDIT_LINCENSE_KEY,

      }}
      data={props.data}
      onChange={(event, editor) => {
        const data = editor.getData()
        props?.onChange && props.onChange(data);
      }}
    />
  </div>
}