/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import Image from '@/components/Image'
import { PrimaryButton } from '@/components/design/button'
import ConfettiGenerator from 'confetti-js'
import { useRouter } from 'next/router'
import { getSession, useSession } from 'next-auth/react'
import { standService } from '@/lib/service'
import { LayoutWrapper } from '@/components/LayoutWrapper'
import { Dialog } from '@headlessui/react'

export default function Level9() {
  return (
    <LayoutWrapper>
      <Landing9 />
      <Modal />
    </LayoutWrapper>
  )
}
const Landing9 = () => {
  const router = useRouter()
  const [playerIndex, setPlayerIndex] = useState(6)
  const [trophyIndex] = useState(0)
  const { data: session, status } = useSession()
  const [gameState, setGameState] = useState({
    playerIndex: 12,
    trophyIndex: 5,
    keys: 0,
    stoneIndex1: 1,
    stoneIndex2: 2,
    stoneIndex3: 4,
    stoneIndex4: 15,
    stoneIndex5: 17,
    thornIndex1: 7,
    thornIndex2: 8,
    thornIndex3: 9,
    blackHoleIndex1: 6,
    blackHoleIndex2: 16,
  })
  const [arrayOfCommand, setArrayOfCommand] = useState([])
  const [successModal, setSuccessModal] = useState(false)
  const [failureModal, setFailureModal] = useState(false)
  const [hideButtonModal, setHideButtonModal] = useState(true)
  const maps = [
    { isPlayer: false, isStone: false, isFinish: false, x: 1, y: 1 },
    { isPlayer: false, isStone: true, isFinish: false, x: 2, y: 1 },
    { isPlayer: false, isStone: false, isFinish: true, x: 3, y: 1 },
    { isPlayer: false, isStone: false, isFinish: false, x: 4, y: 1 },
    { isPlayer: false, isStone: false, isFinish: false, x: 5, y: 1 },
    { isPlayer: false, isStone: false, isFinish: false, x: 6, y: 1 },
    { isPlayer: false, isStone: true, isFinish: false, x: 1, y: 2 },
    { isPlayer: false, isStone: true, isFinish: false, x: 2, y: 2 },
    { isPlayer: false, isStone: true, isFinish: false, x: 3, y: 2 },
    { isPlayer: false, isStone: false, isFinish: false, x: 4, y: 2 },
    { isPlayer: false, isStone: false, isFinish: false, x: 5, y: 2 },
    { isPlayer: false, isStone: false, isFinish: false, x: 6, y: 2 },
    { isPlayer: false, isStone: false, isFinish: false, x: 1, y: 3 },
    { isPlayer: false, isStone: false, isFinish: false, x: 2, y: 3 },
    { isPlayer: true, isStone: false, isFinish: false, x: 3, y: 3 },
    { isPlayer: false, isStone: false, isFinish: false, x: 4, y: 3 },
    { isPlayer: false, isStone: false, isFinish: false, x: 5, y: 3 },
    { isPlayer: false, isStone: false, isFinish: false, x: 6, y: 3 },
  ]
  const commandlength = arrayOfCommand.length

  const addArrayOfCommand = (item) => {
    setArrayOfCommand([...arrayOfCommand, item])
  }

  const functionGetIndexFromXY = (x, y) => {
    let index = maps.findIndex((element) => {
      if (element.x === x && element.y == y) {
        return true
      }
    })

    return index
  }
  const destroyTarget = (current, target) => {
    console.log(current)
    if (current === target) {
      return 100
    } else {
      return current
    }
  }

  const sandungBatuTarget = (item, batu) => {
    if (item === batu) {
      return true
    } else {
      return false
    }
  }

  const PostData = async () => {
    let res = await standService.post(
      `/api/awsm-noob-data`,
      {
        level: 9,
        steps: commandlength,
      },
      {
        headers: {
          Authorization: `Bearer ${session.dynamoToken}`,
        },
      }
    )
  }

  const handleRun = (item) => {
    setHideButtonModal(false)
    let currentInterval = 0

    let makeIntervalID = setInterval(() => {
      // HANDLE MOVEMENT
      switch (arrayOfCommand[currentInterval]) {
        case 'kiri':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (currentX === 1) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 2 &&
              currentY === 1 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX - 1, currentY), current.keys)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX - 1, currentY),
                trophyIndex: current.trophyIndex,
                keys: 99,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 3 &&
              currentY === 1 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX - 1, currentY), current.stoneIndex1)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 4 &&
              currentY === 1 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX - 1, currentY), current.stoneIndex2)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 6 &&
              currentY === 1 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX - 1, currentY), current.stoneIndex3)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 6 &&
              currentY === 3 &&
              sandungBatuTarget(
                functionGetIndexFromXY(currentX - 1, currentY),
                current.blackHoleIndex2
              )
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX - 1, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 5 &&
              currentY === 2 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX - 1, currentY), current.thornIndex3)
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX - 1, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX - 1, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            }
          })
          break
        case 'kanan':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (currentX === 6) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 1 &&
              currentY === 1 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX + 1, currentY), current.stoneIndex1)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 2 &&
              currentY === 1 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX + 1, currentY), current.stoneIndex2)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 4 &&
              currentY === 1 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX + 1, currentY), current.stoneIndex3)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 5 &&
              currentY === 1 &&
              current.keys !== 99 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX + 1, currentY), current.trophyIndex)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 5 &&
              currentY === 1 &&
              current.keys === 99 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX + 1, currentY), current.trophyIndex)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX + 1, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 3 &&
              currentY === 3 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX + 1, currentY), current.stoneIndex4)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 4 &&
              currentY === 3 &&
              sandungBatuTarget(
                functionGetIndexFromXY(currentX + 1, currentY),
                current.blackHoleIndex2
              )
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX + 1, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX + 1, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            }
          })
          break
        case 'atas':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (currentY === 1) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 1 &&
              currentY === 3 &&
              sandungBatuTarget(
                functionGetIndexFromXY(currentX, currentY - 1),
                current.blackHoleIndex1
              )
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY - 1),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 2 &&
              currentY === 3 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY - 1), current.thornIndex1)
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY - 1),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 3 &&
              currentY === 3 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY - 1), current.thornIndex2)
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY - 1),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 4 &&
              currentY === 3 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY - 1), current.thornIndex3)
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY - 1),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 5 &&
              currentY === 2 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY - 1), current.stoneIndex3)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 6 &&
              currentY === 2 &&
              current.keys !== 99 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY - 1), current.trophyIndex)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 6 &&
              currentY === 2 &&
              current.keys === 99 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY - 1), current.trophyIndex)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY - 1),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY - 1),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            }
          })
          break
        case 'bawah':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (currentY === 3) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 1 &&
              currentY === 1 &&
              sandungBatuTarget(
                functionGetIndexFromXY(currentX, currentY + 1),
                current.blackHoleIndex1
              )
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY + 1),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 3 &&
              currentY === 1 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY + 1), current.thornIndex2)
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY + 1),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 2 &&
              currentY === 1 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY + 1), current.thornIndex1)
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY + 1),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 4 &&
              currentY === 1 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY + 1), current.thornIndex3)
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY + 1),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 5 &&
              currentY === 2 &&
              sandungBatuTarget(
                functionGetIndexFromXY(currentX, currentY + 1),
                current.blackHoleIndex2
              )
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY + 1),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 6 &&
              currentY === 2 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY + 1), current.stoneIndex5)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY + 1),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            }
          })
          break
        case 'tembak-bawah':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            const search = maps.findIndex((obj) => obj.x === currentX && obj.y === currentY + 1)
            setGameState({
              playerIndex: functionGetIndexFromXY(currentX, currentY),
              trophyIndex: current.trophyIndex,
              keys: current.keys,
              stoneIndex1: destroyTarget(current.stoneIndex1, search),
              stoneIndex2: destroyTarget(current.stoneIndex2, search),
              stoneIndex3: destroyTarget(current.stoneIndex3, search),
              stoneIndex4: destroyTarget(current.stoneIndex4, search),
              stoneIndex5: destroyTarget(current.stoneIndex5, search),
              thornIndex1: current.thornIndex1,
              thornIndex2: current.thornIndex2,
              thornIndex3: current.thornIndex3,
              blackHoleIndex1: current.blackHoleIndex1,
              blackHoleIndex2: current.blackHoleIndex2,
            })
          })
          break
        case 'tembak-atas':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            const search = maps.findIndex((obj) => obj.x === currentX && obj.y === currentY - 1)
            setGameState({
              playerIndex: functionGetIndexFromXY(currentX, currentY),
              trophyIndex: current.trophyIndex,
              keys: current.keys,
              stoneIndex1: destroyTarget(current.stoneIndex1, search),
              stoneIndex2: destroyTarget(current.stoneIndex2, search),
              stoneIndex3: destroyTarget(current.stoneIndex3, search),
              stoneIndex4: destroyTarget(current.stoneIndex4, search),
              stoneIndex5: destroyTarget(current.stoneIndex5, search),
              thornIndex1: current.thornIndex1,
              thornIndex2: current.thornIndex2,
              thornIndex3: current.thornIndex3,
              blackHoleIndex1: current.blackHoleIndex1,
              blackHoleIndex2: current.blackHoleIndex2,
            })
          })
          break
        case 'tembak-kiri':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            const search = maps.findIndex((obj) => obj.x === currentX - 1 && obj.y === currentY)
            setGameState({
              playerIndex: functionGetIndexFromXY(currentX, currentY),
              trophyIndex: current.trophyIndex,
              keys: current.keys,
              stoneIndex1: destroyTarget(current.stoneIndex1, search),
              stoneIndex2: destroyTarget(current.stoneIndex2, search),
              stoneIndex3: destroyTarget(current.stoneIndex3, search),
              stoneIndex4: destroyTarget(current.stoneIndex4, search),
              stoneIndex5: destroyTarget(current.stoneIndex5, search),
              thornIndex1: current.thornIndex1,
              thornIndex2: current.thornIndex2,
              thornIndex3: current.thornIndex3,
              blackHoleIndex1: current.blackHoleIndex1,
              blackHoleIndex2: current.blackHoleIndex2,
            })
          })
          break
        case 'tembak-kanan':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            const search = maps.findIndex((obj) => obj.x === currentX + 1 && obj.y === currentY)
            setGameState({
              playerIndex: functionGetIndexFromXY(currentX, currentY),
              trophyIndex: current.trophyIndex,
              keys: current.keys,
              stoneIndex1: destroyTarget(current.stoneIndex1, search),
              stoneIndex2: destroyTarget(current.stoneIndex2, search),
              stoneIndex3: destroyTarget(current.stoneIndex3, search),
              stoneIndex4: destroyTarget(current.stoneIndex4, search),
              stoneIndex5: destroyTarget(current.stoneIndex5, search),
              thornIndex1: current.thornIndex1,
              thornIndex2: current.thornIndex2,
              thornIndex3: current.thornIndex3,
              blackHoleIndex1: current.blackHoleIndex1,
              blackHoleIndex2: current.blackHoleIndex2,
            })
          })
          break
        case 'loncat-atas':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (currentY === 1) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 1 &&
              currentY === 3 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY - 2), current.keys)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY - 2),
                trophyIndex: current.trophyIndex,
                keys: 99,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 6 &&
              currentY === 3 &&
              current.keys !== 99 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY - 2), current.trophyIndex)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 6 &&
              currentY === 3 &&
              current.keys === 99 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY - 2), current.trophyIndex)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY - 2),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              (currentX === 2 &&
                currentY === 3 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX, currentY - 2),
                  current.stoneIndex1
                )) ||
              (currentX === 3 &&
                currentY === 3 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX, currentY - 2),
                  current.stoneIndex2
                ))
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else {
              setGameState({
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                playerIndex: functionGetIndexFromXY(currentX, currentY - 2),
              })
            }
          })
          break
        case 'loncat-bawah':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (currentY === 3) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 6 &&
              currentY === 1 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY + 2), current.stoneIndex5)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 5 &&
              currentY === 2 &&
              sandungBatuTarget(
                functionGetIndexFromXY(currentX, currentY + 2),
                current.blackHoleIndex2
              )
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY + 2),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else {
              setGameState({
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                playerIndex: functionGetIndexFromXY(currentX, currentY + 2),
              })
            }
          })
          break
        case 'loncat-kanan':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (currentX === 5) {
              setGameState({
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              (currentX === 2 &&
                currentY === 3 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX + 2, currentY),
                  current.stoneIndex4
                )) ||
              (currentX === 4 &&
                currentY === 3 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX + 2, currentY),
                  current.stoneIndex5
                )) ||
              (currentX === 1 &&
                currentY === 1 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX + 2, currentY),
                  current.stoneIndex2
                )) ||
              (currentX === 3 &&
                currentY === 1 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX + 2, currentY),
                  current.stoneIndex3
                ))
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 3 &&
              currentY === 3 &&
              sandungBatuTarget(
                functionGetIndexFromXY(currentX + 2, currentY),
                current.blackHoleIndex2
              )
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX + 2, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 4 &&
              currentY === 1 &&
              current.keys !== 99 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX + 2, currentY), current.trophyIndex)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 4 &&
              currentY === 1 &&
              current.keys === 99 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX + 2, currentY), current.trophyIndex)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX + 2, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else {
              setGameState({
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                playerIndex: functionGetIndexFromXY(currentX + 2, currentY),
              })
            }
          })
          break
        case 'loncat-kiri':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (currentX === 2) {
              setGameState({
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              (currentX === 4 &&
                currentY === 1 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX - 2, currentY),
                  current.stoneIndex1
                )) ||
              (currentX === 5 &&
                currentY === 1 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX - 2, currentY),
                  current.stoneIndex2
                )) ||
              (currentX === 6 &&
                currentY === 3 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX - 2, currentY),
                  current.stoneIndex4
                ))
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 5 &&
              currentY === 2 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX - 2, currentY), current.thornIndex2)
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX - 2, currentY),
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else if (
              currentX === 3 &&
              currentY === 1 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX - 2, currentY), current.keys)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX - 2, currentY),
                trophyIndex: current.trophyIndex,
                keys: 99,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
              })
            } else {
              setGameState({
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                playerIndex: functionGetIndexFromXY(currentX - 2, currentY),
              })
            }
          })
          break
      }
      currentInterval = currentInterval + 1

      // HANDLE MOVEMENT
      if (currentInterval === arrayOfCommand.length) {
        setGameState((current) => {
          let currentX = maps[current.playerIndex].x
          let currentY = maps[current.playerIndex].y
          if (current.playerIndex == current.trophyIndex) {
            setSuccessModal(true)
            setGameState({
              trophyIndex: current.trophyIndex,
              keys: current.keys,
              stoneIndex1: current.stoneIndex1,
              stoneIndex2: current.stoneIndex2,
              stoneIndex3: current.stoneIndex3,
              stoneIndex4: current.stoneIndex4,
              stoneIndex5: current.stoneIndex5,
              thornIndex1: current.thornIndex1,
              thornIndex2: current.thornIndex2,
              thornIndex3: current.thornIndex3,
              blackHoleIndex1: current.blackHoleIndex1,
              blackHoleIndex2: current.blackHoleIndex2,
              playerIndex: functionGetIndexFromXY(currentX, currentY),
            })
          } else {
            setFailureModal(true)
            setGameState({
              trophyIndex: current.trophyIndex,
              keys: current.keys,
              stoneIndex1: current.stoneIndex1,
              stoneIndex2: current.stoneIndex2,
              stoneIndex3: current.stoneIndex3,
              stoneIndex4: current.stoneIndex4,
              stoneIndex5: current.stoneIndex5,
              thornIndex1: current.thornIndex1,
              thornIndex2: current.thornIndex2,
              thornIndex3: current.thornIndex3,
              blackHoleIndex1: current.blackHoleIndex1,
              blackHoleIndex2: current.blackHoleIndex2,
              playerIndex: functionGetIndexFromXY(currentX, currentY),
            })
          }
        })
        clearInterval(makeIntervalID)
      }
    }, 1000)
  }

  const reset = () => {
    setArrayOfCommand([])
    setGameState({
      playerIndex: 12,
      trophyIndex: 5,
      keys: 0,
      stoneIndex1: 1,
      stoneIndex2: 2,
      stoneIndex3: 4,
      stoneIndex4: 15,
      stoneIndex5: 17,
      thornIndex1: 7,
      thornIndex2: 8,
      thornIndex3: 9,
      blackHoleIndex1: 6,
      blackHoleIndex2: 16,
    })
    setHideButtonModal(true)
  }
  useEffect(() => {
    if (successModal === true) {
      const confettiSettings = { target: 'my-canvas' }
      const confetti = new ConfettiGenerator(confettiSettings)
      confetti.render()
      setTimeout(() => {
        router.push('/camps/awesome-noob/index')
        confetti.clear()
      }, 5000)
      setTimeout(() => {
        PostData()
        setSuccessModal(false)
      }, 2000)
    } else if (failureModal === true) {
      setTimeout(() => {
        setFailureModal(false)
      }, 2000)
    }
  }, [successModal, failureModal, router])
  return (
    <>
      <canvas className="fixed w-full h-full z-10 pointer-events-none" id="my-canvas"></canvas>
      <div>
        {/* <div className="w-[200px] h-[50px] m-6 mb-0 md:mb-32"> */}
        {successModal === false ? null : <ToastSuccess setModals={setSuccessModal} />}
        {failureModal === false ? null : <ToastFailure setModals={setFailureModal} />}
        {/* </div> */}
        <div className="flex flex-col flex-wrap mb-5 justify-center items-center w-full md:flex md:flex-row md:justify-center md:item-center">
          <div className="grid grid-cols-6 overflow-auto">
            {maps.map((item, index) => (
              <div
                className="flex justify-center items-center h-[100px] w-[60px] md:h-32 md:w-32 border-2 border-black"
                key={`${item.x}_${item.y}`}
              >
                {/* <p className="font-mono">
                ({`${item.x},${item.y}`})-[{index}]
              </p> */}
                <div>
                  {gameState?.playerIndex === index ? (
                    <img
                      className="animate-bounce z-10 overflow-visible"
                      src="/static/images/user.png"
                      alt="User"
                      width="45"
                      height="50"
                    />
                  ) : null}
                  {gameState?.trophyIndex === index ? (
                    <Image
                      className=""
                      src="/static/images/atom.png"
                      alt="User"
                      width="70"
                      height="70"
                    />
                  ) : null}{' '}
                  {gameState?.keys === index ? (
                    <Image
                      className=""
                      src="/static/images/keys.png"
                      alt="User"
                      width="50"
                      height="50"
                    />
                  ) : null}{' '}
                  {gameState?.stoneIndex1 === index ? (
                    <Image
                      className=""
                      src="/static/images/rock.png"
                      alt="User"
                      width="50"
                      height="50"
                    />
                  ) : null}{' '}
                  {gameState?.stoneIndex2 === index ? (
                    <Image
                      className=""
                      src="/static/images/rock.png"
                      alt="User"
                      width="50"
                      height="50"
                    />
                  ) : null}{' '}
                  {gameState?.stoneIndex3 === index ? (
                    <Image
                      className=""
                      src="/static/images/rock.png"
                      alt="User"
                      width="50"
                      height="50"
                    />
                  ) : null}{' '}
                  {gameState?.stoneIndex4 === index ? (
                    <Image
                      className=""
                      src="/static/images/rock.png"
                      alt="User"
                      width="50"
                      height="50"
                    />
                  ) : null}{' '}
                  {gameState?.stoneIndex5 === index ? (
                    <Image
                      className=""
                      src="/static/images/rock.png"
                      alt="User"
                      width="50"
                      height="50"
                    />
                  ) : null}{' '}
                  {gameState?.thornIndex1 === index ? (
                    <Image
                      className=""
                      src="/static/images/thorn.png"
                      alt="User"
                      width="50"
                      height="50"
                    />
                  ) : null}{' '}
                  {gameState?.thornIndex2 === index ? (
                    <Image
                      className=""
                      src="/static/images/thorn.png"
                      alt="User"
                      width="50"
                      height="50"
                    />
                  ) : null}{' '}
                  {gameState?.thornIndex3 === index ? (
                    <Image
                      className=""
                      src="/static/images/thorn.png"
                      alt="User"
                      width="50"
                      height="50"
                    />
                  ) : null}{' '}
                  {gameState?.blackHoleIndex1 === index ? (
                    <Image
                      className=""
                      src="/static/images/blackhole.png"
                      alt="User"
                      width="75"
                      height="100"
                    />
                  ) : null}{' '}
                  {gameState?.blackHoleIndex2 === index ? (
                    <Image
                      className=""
                      src="/static/images/blackhole.png"
                      alt="User"
                      width="75"
                      height="100"
                    />
                  ) : null}{' '}
                </div>
              </div>
            ))}
          </div>

          <div className="my-2">
            <div className="flex flex-col flex-wrap justify-center items-center my-2 w-full h-full">
              <ul className="w-[150px] h-[100px] md:h-[125px] overflow-auto">
                {arrayOfCommand.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {commandlength < 10 ? (
              <>
                <div className="overflow-scroll h-[100px] md:overflow-auto md:h-full">
                  <div className="flex flex-row justify-center items-center ml-2 mb-2">
                    <PrimaryButton
                      onClick={() => addArrayOfCommand('kiri')}
                      className="border-2 border-black-800 rounded-xl  mx-1 md:mx-2 md:py-2 md:px-4"
                    >
                      kiri
                    </PrimaryButton>
                    <PrimaryButton
                      onClick={() => addArrayOfCommand('kanan')}
                      className="border-2 border-black-800 rounded-xl  md:mx-2 md:p-2"
                    >
                      kanan
                    </PrimaryButton>
                    <PrimaryButton
                      onClick={() => addArrayOfCommand('atas')}
                      className="border-2 border-black-800 rounded-xl mx-1  md:mx-2 md:p-2"
                    >
                      atas
                    </PrimaryButton>
                    <PrimaryButton
                      onClick={() => addArrayOfCommand('bawah')}
                      className="border-2 border-black-800 rounded-xl mx-1  md:mx-2 md:p-2"
                    >
                      bawah
                    </PrimaryButton>
                  </div>
                  <div className="grid grid-cols-2 justify-center items-center md:ml-2 md:mb-2">
                    <PrimaryButton
                      onClick={() => addArrayOfCommand('tembak-kiri')}
                      className="border-2 border-black-800 rounded-xl mx-1 my-1 md:mx-2 md:my-2 md:py-2 md:px-4"
                    >
                      tembak kiri
                    </PrimaryButton>
                    <PrimaryButton
                      onClick={() => addArrayOfCommand('tembak-kanan')}
                      className="border-2 border-black-800 rounded-xl my-1 md:mx-2 md:p-2"
                    >
                      tembak kanan
                    </PrimaryButton>
                    <PrimaryButton
                      onClick={() => addArrayOfCommand('tembak-atas')}
                      className="border-2 border-black-800 rounded-xl mx-1 my-1 md:mx-2 md:my-2 md:p-2"
                    >
                      tembak atas
                    </PrimaryButton>
                    <PrimaryButton
                      onClick={() => addArrayOfCommand('tembak-bawah')}
                      className="border-2 border-black-800 rounded-xl my-1  md:mx-2 md:p-2"
                    >
                      tembak bawah
                    </PrimaryButton>
                    <PrimaryButton
                      onClick={() => addArrayOfCommand('loncat-atas')}
                      className="border mx-1 my-1 md:mx-2 md:my-2 md:p-2 bg-red-800"
                    >
                      Loncat Atas
                    </PrimaryButton>
                    <PrimaryButton
                      onClick={() => addArrayOfCommand('loncat-bawah')}
                      className="border md:mx-2 md:p-2 bg-red-800"
                    >
                      Loncat Bawah
                    </PrimaryButton>
                    <PrimaryButton
                      onClick={() => addArrayOfCommand('loncat-kanan')}
                      className="border mx-1 my-1 md:mx-2 md:my-2 md:p-2 bg-red-800"
                    >
                      Loncat Kanan
                    </PrimaryButton>
                    <PrimaryButton
                      onClick={() => addArrayOfCommand('loncat-kiri')}
                      className="border md:mx-2 md:p-2 bg-red-800"
                    >
                      Loncat Kiri
                    </PrimaryButton>
                    <PrimaryButton
                      variant="success"
                      onClick={() => handleRun('RUN')}
                      className="border rounded-xl  md:mx-2 mx-1 md:py-2 md:px-4"
                    >
                      Run
                    </PrimaryButton>
                    <PrimaryButton
                      variant="normal"
                      onClick={reset}
                      className="rounded-xl  md:mx-2 md:p-2"
                    >
                      Reset
                    </PrimaryButton>
                  </div>
                </div>
              </>
            ) : (
              <>
                <PrimaryButton
                  variant="success"
                  onClick={() => handleRun('RUN')}
                  className={`border mx-2 p-2 ${hideButtonModal === true ? `block` : `hidden`}`}
                >
                  Run
                </PrimaryButton>
                <PrimaryButton variant="normal" onClick={reset} className="rounded-xl  mx-2 p-2">
                  Reset
                </PrimaryButton>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
const Modal = () => {
  const [isOpen, setIsOpen] = useState(true)
  const handleClick = () => {
    setIsOpen(false)
  }
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="">
      <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black-400 p-4 z-30">
        <div className="opacity-100 text-black">
          <p className="font-black">MISI KALI INI EMANG AKAN MENGAMBIL ATOM</p>
        </div>
        <div className="flex justify-center items-center">
          <PrimaryButton
            variant={`success`}
            children={`Mulai`}
            onClick={handleClick}
            parentClassName={`mt-6`}
          />
        </div>
      </div>
    </Dialog>
  )
}
const ToastSuccess = () => {
  return (
    <div className="flex flex-row justify-center w-[200px] m-5 items-center border-2 border-black bg-black rounded-lg p-1">
      <div>
        <div className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-green mr-2">
          <svg
            width="15"
            height="10"
            viewBox="0 0 18 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 1L6 12L1 7"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div>
        <p className="text-xs font-bold text-white">Selamat kamu menang</p>
      </div>
    </div>
  )
}
const ToastFailure = () => {
  return (
    <div className="flex flex-row justify-start w-[200px] m-5 items-center border-2 border-black bg-black rounded-lg p-1">
      <div>
        <div className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-red ml-1 mr-10">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#18191F"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#18191F"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div>
        <p className="text-xs font-bold text-white">Kamu kalah</p>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (session === null) {
    return {
      redirect: {
        destination: '/camps/awesome-noob/login',
      },
    }
  } else {
    const session = await getSession(context)
    const url_location = context.resolvedUrl
    let ids = url_location.split('-')

    let res = await standService.post(
      `/api/check-awsm-noob`,
      {},
      {
        headers: {
          Authorization: `Bearer ${session.dynamoToken}`,
        },
      }
    )
    if (res !== null) {
      let user_position = res.data + 1
      if (parseInt(ids[2]) > user_position) {
        return {
          redirect: {
            destination: `/camps/awesome-noob/level-${user_position}`,
          },
        }
      }
    }
    return {
      props: {
        isAuthenticated: true,
        dynamoToken: session.dynamoToken,
        test: res.data,
        sesi: ids[2],
      }, // will be passed to the page component as props
    }
  }
}
