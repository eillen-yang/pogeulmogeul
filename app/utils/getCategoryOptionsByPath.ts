import {
  modelCategoryOptions,
  photoCategoryOptions,
  photoshopCategoryOptions,
} from '../_constants/selectOptions'

export default function getCategoryOptionsByPath(
  pathname: string,
): string[] {
  if (pathname.includes('photographer')) {
    return photoCategoryOptions
  }
  if (pathname.includes('model')) {
    return modelCategoryOptions
  }
  if (pathname.includes('photoshop')) {
    return photoshopCategoryOptions
  }
  return []
}
