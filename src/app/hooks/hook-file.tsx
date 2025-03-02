import { getBase64 } from "@/presentation/file-controller";
import { Image, UploadFile } from "antd";
import { ReactElement, ReactNode, useState } from "react";

export const UsePreviewImage = () => {
  const [previewOpen, setPreviewOpen]   = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const handlePreview = async(file: UploadFile) => {
    if(!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as File);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const ImagePreview = (): ReactElement | null => previewImage ? (<Image
    alt={'preview'}
    wrapperStyle={{display: 'none'}}
    preview={{
      visible: previewOpen,
      onVisibleChange: (visible) => setPreviewOpen(visible),
      afterOpenChange: (visible) => !visible && setPreviewImage(''),
    }}
    src={previewImage}
  />) : null

  return {
    ImagePreview,
    handlePreview
  }
}