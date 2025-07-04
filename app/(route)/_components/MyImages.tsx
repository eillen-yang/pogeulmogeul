import { faker } from '@faker-js/faker'
import Image from 'next/image'
import image_upload from '@/public/icon/img_upload.svg'

export default function MyImages() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* {images.map((src, idx) => ( */}
      <img
        src={faker.image.avatar()}
        alt={`user image`}
        className="w-full h-auto object-cover rounded-xl"
      />
      <img
        src={faker.image.avatar()}
        alt={`user image`}
        className="w-full h-auto object-cover rounded-xl"
      />
      <img
        src={faker.image.avatar()}
        alt={`user image`}
        className="w-full h-auto object-cover rounded-xl"
      />
      <img
        src={faker.image.avatar()}
        alt={`user image`}
        className="w-full h-auto object-cover rounded-xl"
      />
      <img
        src={faker.image.avatar()}
        alt={`user image`}
        className="w-full h-auto object-cover rounded-xl"
      />
      <img
        src={faker.image.avatar()}
        alt={`user image`}
        className="w-full h-auto object-cover rounded-xl"
      />
      <img
        src={faker.image.avatar()}
        alt={`user image`}
        className="w-full h-auto object-cover rounded-xl"
      />

      <div className="flex items-center justify-center w-full py-10 border border-[var(--color-2)] rounded-xl cursor-pointer">
        <Image
          className="object-cover"
          src={image_upload}
          alt="등록이미지 업로드"
        />
      </div>
      {/* ))} */}
    </div>
  )
}
