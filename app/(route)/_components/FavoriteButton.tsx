'use client'

import { memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import fullHeart from '@/public/icon/profile_fullheart.svg'
import heart from '@/public/icon/profile_heart.svg'

interface FavoriteButtonProps {
  isActive: boolean
  onClick: () => void
}

function FavoriteButtonComponent({
  isActive,
  onClick,
}: FavoriteButtonProps) {
  return (
    <button
      className="w-8 h-8"
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      aria-label="즐겨찾기 토글"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isActive ? 'liked' : 'unliked'}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          exit={{ scale: 0.4, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <Image
            src={isActive ? fullHeart : heart}
            alt="favorite"
            width={20}
            height={20}
            className="object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </button>
  )
}

export const FavoriteButton = memo(FavoriteButtonComponent)
