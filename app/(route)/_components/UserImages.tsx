import { faker } from '@faker-js/faker'

type UserImagesProps = {
  images?: string[] // 이미지 URL 배열
}

export default function UserImages({ images }: UserImagesProps) {
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
      {/* ))} */}
    </div>
  )
}
