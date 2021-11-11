/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import Image from '@/components/Image'
import { PrimaryButton } from '@/components/design/button'
import { getSession } from 'next-auth/react'
import ConfettiGenerator from 'confetti-js'
import { useRouter } from 'next/router'

export default function Level6() {
  const router = useRouter()
  const [playerIndex, setPlayerIndex] = useState(6)
  const [trophyIndex] = useState(0)
  const [gameState, setGameState] = useState({
    playerIndex: 12,
    trophyIndex: 0,
    stoneIndex1: 1,
    stoneIndex2: 2,
    stoneIndex3: 3,
    stoneIndex4: 4,
    stoneIndex5: 11,
    blackHoleIndex1: 6,
    blackHoleIndex2: 13,
    blackHoleIndex3: 16,
    thornIndex1: 7,
    thornIndex2: 8,
    thornIndex3: 9,
    keyIndex: 10,
  })
  const [arrayOfCommand, setArrayOfCommand] = useState([])
  const [successModal, setSuccessModal] = useState(false)
  const [failureModal, setFailureModal] = useState(false)
  const maps = [
    { isPlayer: false, isStone: false, isFinish: false, x: 1, y: 1 },
    { isPlayer: false, isStone: true, isFinish: false, x: 2, y: 1 },
    { isPlayer: false, isStone: false, isFinish: true, x: 3, y: 1 },
    { isPlayer: false, isStone: true, isFinish: false, x: 4, y: 1 },
    { isPlayer: false, isStone: true, isFinish: false, x: 5, y: 1 },
    { isPlayer: false, isStone: true, isFinish: false, x: 6, y: 1 },
    { isPlayer: false, isStone: false, isFinish: false, x: 1, y: 2 },
    { isPlayer: false, isStone: false, isFinish: false, x: 2, y: 2 },
    { isPlayer: true, isStone: false, isFinish: false, x: 3, y: 2 },
    { isPlayer: false, isStone: false, isFinish: false, x: 4, y: 2 },
    { isPlayer: false, isStone: false, isFinish: false, x: 5, y: 2 },
    { isPlayer: true, isStone: false, isFinish: false, x: 6, y: 2 },
    { isPlayer: false, isStone: false, isFinish: false, x: 1, y: 3 },
    { isPlayer: false, isStone: false, isFinish: false, x: 2, y: 3 },
    { isPlayer: true, isStone: false, isFinish: false, x: 3, y: 3 },
    { isPlayer: false, isStone: false, isFinish: false, x: 4, y: 3 },
    { isPlayer: false, isStone: false, isFinish: false, x: 5, y: 3 },
    { isPlayer: true, isStone: false, isFinish: false, x: 6, y: 3 },
  ]
  const commandlength = arrayOfCommand.length

  const addArrayOfCommand = (item) => {
    setArrayOfCommand([...arrayOfCommand, item])
    console.log(item)
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

  const sandungBatuTarget = (item, batu1, batu2, batu3, batu4) => {
    if (item === batu1 || item === batu2 || item === batu3 || item === batu4) {
      return true
    } else {
      return false
    }
  }
  const blackholeTarget = (item, hole1, hole2, hole3) => {
    console.log(item)
    if (item === hole1 || item === hole2 || item === hole3) {
      return true
    } else {
      return false
    }
  }

  const handleRun = (item) => {
    let currentInterval = 0

    let makeIntervalID = setInterval(() => {
      // HANDLE MOVEMENT
      switch (arrayOfCommand[currentInterval]) {
        case 'kiri':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (
              (currentX === 6 &&
                currentY === 1 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX - 1, currentY),
                  current.stoneIndex4
                )) ||
              (currentX === 1 && currentY === 3)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
              })
            } else if (
              (currentX === 3 &&
                currentY === 3 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX - 1, currentY),
                  current.blackHoleIndex2
                )) ||
              (currentX === 6 &&
                currentY === 3 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX - 1, currentY),
                  current.blackHoleIndex3
                )) ||
              (currentX === 5 &&
                currentY === 2 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX - 1, currentY),
                  current.thornIndex3
                ))
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX - 1, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
              })
            } else if (currentX === 6 && currentY === 2) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX - 1, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: 100,
              })
            } else {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX - 1, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
              })
            }
          })
          break
        case 'kanan':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (
              (currentX === 1 &&
                currentY === 3 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX + 1, currentY),
                  current.blackHoleIndex2
                )) ||
              (currentX === 4 &&
                currentY === 3 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX + 1, currentY),
                  current.blackHoleIndex3
                ))
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX + 1, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
              })
            } else if (
              currentX === 5 &&
              currentY === 2 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX + 1, currentY), current.stoneIndex5)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: 100,
              })
            } else if ((currentX === 6 && currentY === 1) || (currentX === 6 && currentY === 3)) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
              })
            } else {
              setGameState({
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
                playerIndex: functionGetIndexFromXY(currentX + 1, currentY),
              })
            }
          })
          break
        case 'atas':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (
              (currentX === 1 &&
                currentY === 3 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX, currentY - 1),
                  current.blackHoleIndex1
                )) ||
              (currentX === 3 &&
                currentY === 3 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX, currentY - 1),
                  current.thornIndex2
                )) ||
              (currentX === 4 &&
                currentY === 3 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX, currentY - 1),
                  current.thornIndex3
                ))
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY - 1),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
              })
            } else if (
              currentX === 5 &&
              currentY === 2 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY - 1), current.stoneIndex4)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: 100,
              })
            } else if (
              (currentX === 6 &&
                currentY === 3 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX, currentY - 1),
                  current.stoneIndex5
                )) ||
              (currentX === 5 &&
                currentY === 2 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX, currentY - 1),
                  current.stoneIndex4
                )) ||
              (currentX === 6 && currentY === 1) ||
              (currentX === 5 && currentY === 1) ||
              (currentX === 4 && currentY === 1) ||
              (currentX === 3 && currentY === 1) ||
              (currentX === 2 && currentY === 1)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
              })
            } else {
              setGameState({
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY - 1),
              })
            }
          })
          break
        case 'bawah':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (
              (currentX === 1 && currentY === 3) ||
              (currentX === 3 && currentY === 3) ||
              (currentX === 4 && currentY === 3) ||
              (currentX === 6 && currentY === 3) ||
              (currentX === 6 && currentY === 1)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
              })
            } else if (
              currentX === 5 &&
              currentY === 2 &&
              sandungBatuTarget(
                functionGetIndexFromXY(currentX, currentY + 1),
                current.blackHoleIndex3
              )
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY + 1),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: 100,
              })
            } else if (
              (currentX === 2 &&
                currentY === 1 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX, currentY + 1),
                  current.thornIndex1
                )) ||
              (currentX === 3 &&
                currentY === 1 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX, currentY + 1),
                  current.thornIndex2
                )) ||
              (currentX === 4 &&
                currentY === 1 &&
                sandungBatuTarget(
                  functionGetIndexFromXY(currentX, currentY + 1),
                  current.thornIndex3
                ))
            ) {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY + 1),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
              })
            } else if (currentX === 5 && currentY === 1) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY + 1),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: 100,
              })
            } else {
              setGameState({
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY + 1),
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
              trophyIndex: current.trophyIndex,
              stoneIndex1: destroyTarget(current.stoneIndex1, search),
              stoneIndex2: destroyTarget(current.stoneIndex2, search),
              stoneIndex3: destroyTarget(current.stoneIndex3, search),
              stoneIndex4: destroyTarget(current.stoneIndex4, search),
              stoneIndex5: destroyTarget(current.stoneIndex5, search),
              blackHoleIndex1: current.blackHoleIndex1,
              blackHoleIndex2: current.blackHoleIndex2,
              blackHoleIndex3: current.blackHoleIndex3,
              thornIndex1: current.thornIndex1,
              thornIndex2: current.thornIndex2,
              thornIndex3: current.thornIndex3,
              keyIndex: current.keyIndex,
              playerIndex: functionGetIndexFromXY(currentX, currentY),
            })
          })
          break
        case 'tembak-atas':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            const search = maps.findIndex((obj) => obj.x === currentX && obj.y === currentY - 1)
            setGameState({
              trophyIndex: current.trophyIndex,
              stoneIndex1: destroyTarget(current.stoneIndex1, search),
              stoneIndex2: destroyTarget(current.stoneIndex2, search),
              stoneIndex3: destroyTarget(current.stoneIndex3, search),
              stoneIndex4: destroyTarget(current.stoneIndex4, search),
              stoneIndex5: destroyTarget(current.stoneIndex5, search),
              blackHoleIndex1: current.blackHoleIndex1,
              blackHoleIndex2: current.blackHoleIndex2,
              blackHoleIndex3: current.blackHoleIndex3,
              thornIndex1: current.thornIndex1,
              thornIndex2: current.thornIndex2,
              thornIndex3: current.thornIndex3,
              keyIndex: current.keyIndex,
              playerIndex: functionGetIndexFromXY(currentX, currentY),
            })
          })
          break
        case 'tembak-kiri':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            const search = maps.findIndex((obj) => obj.x === currentX - 1 && obj.y === currentY)
            setGameState({
              trophyIndex: current.trophyIndex,
              stoneIndex1: destroyTarget(current.stoneIndex1, search),
              stoneIndex2: destroyTarget(current.stoneIndex2, search),
              stoneIndex3: destroyTarget(current.stoneIndex3, search),
              stoneIndex4: destroyTarget(current.stoneIndex4, search),
              stoneIndex5: destroyTarget(current.stoneIndex5, search),
              blackHoleIndex1: current.blackHoleIndex1,
              blackHoleIndex2: current.blackHoleIndex2,
              blackHoleIndex3: current.blackHoleIndex3,
              thornIndex1: current.thornIndex1,
              thornIndex2: current.thornIndex2,
              thornIndex3: current.thornIndex3,
              keyIndex: current.keyIndex,
              playerIndex: functionGetIndexFromXY(currentX, currentY),
            })
          })
          break
        case 'tembak-kanan':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            const search = maps.findIndex((obj) => obj.x === currentX + 1 && obj.y === currentY)
            setGameState({
              trophyIndex: current.trophyIndex,
              stoneIndex1: destroyTarget(current.stoneIndex1, search),
              stoneIndex2: destroyTarget(current.stoneIndex2, search),
              stoneIndex3: destroyTarget(current.stoneIndex3, search),
              stoneIndex4: destroyTarget(current.stoneIndex4, search),
              stoneIndex5: destroyTarget(current.stoneIndex5, search),
              blackHoleIndex1: current.blackHoleIndex1,
              blackHoleIndex2: current.blackHoleIndex2,
              blackHoleIndex3: current.blackHoleIndex3,
              thornIndex1: current.thornIndex1,
              thornIndex2: current.thornIndex2,
              thornIndex3: current.thornIndex3,
              keyIndex: current.keyIndex,
              playerIndex: functionGetIndexFromXY(currentX, currentY),
            })
          })
          break
        case 'loncat-atas':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (
              (currentX === 3 && currentY === 3) ||
              (currentX === 4 && currentY === 3) ||
              (currentX === 6 && currentY === 3)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY - 2),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
              })
            } else if (currentX === 1 && currentY === 3 && current.trophyIndex === 100) {
              setGameState({
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
                playerIndex: functionGetIndexFromXY(currentX - 2, currentY),
              })
            } else {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            }
          })
          break
        case 'loncat-kanan':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (
              (currentX === 1 && currentY === 3) ||
              (currentX === 3 && currentY === 3) ||
              (currentX === 4 && currentY === 3) ||
              (currentX === 2 && currentY === 1) ||
              (currentX === 3 && currentY === 1) ||
              (currentX === 4 && currentY === 1)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX + 2, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
              })
            } else {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            }
          })
          break
        case 'loncat-bawah':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (
              (currentX === 6 && currentY === 1) ||
              (currentX === 5 && currentY === 1) ||
              (currentX === 4 && currentY === 1) ||
              (currentX === 3 && currentY === 1) ||
              (currentX === 2 && currentY === 1)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY + 2),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
              })
            } else {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            }
          })
          break
        case 'loncat-kiri':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (
              (currentX === 3 && currentY === 3) ||
              (currentX === 4 && currentY === 3) ||
              (currentX === 6 && currentY === 3) ||
              (currentX === 5 && currentY === 2) ||
              (currentX === 6 && currentY === 2) ||
              (currentX === 6 && currentY === 1) ||
              (currentX === 5 && currentY === 1) ||
              (currentX === 4 && currentY === 1)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX - 2, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
              })
            } else if (currentX === 3 && currentY === 1 && current.keyIndex === 100) {
              setGameState({
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
                playerIndex: functionGetIndexFromXY(currentX - 2, currentY),
              })
            } else {
              setFailureModal(true)
              clearInterval(makeIntervalID)
              setGameState({
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                stoneIndex5: current.stoneIndex5,
                blackHoleIndex1: current.blackHoleIndex1,
                blackHoleIndex2: current.blackHoleIndex2,
                blackHoleIndex3: current.blackHoleIndex3,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
                thornIndex3: current.thornIndex3,
                keyIndex: current.keyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
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
              stoneIndex1: current.stoneIndex1,
              stoneIndex2: current.stoneIndex2,
              stoneIndex3: current.stoneIndex3,
              stoneIndex4: current.stoneIndex4,
              stoneIndex5: current.stoneIndex5,
              blackHoleIndex1: current.blackHoleIndex1,
              blackHoleIndex2: current.blackHoleIndex2,
              blackHoleIndex3: current.blackHoleIndex3,
              thornIndex1: current.thornIndex1,
              thornIndex2: current.thornIndex2,
              thornIndex3: current.thornIndex3,
              keyIndex: current.keyIndex,
              playerIndex: functionGetIndexFromXY(currentX, currentY),
            })
          } else if (
            current.playerIndex == current.blackHoleIndex1 ||
            current.playerIndex == current.blackHoleIndex2 ||
            current.playerIndex == current.blackHoleIndex3 ||
            current.playerIndex == current.stoneIndex1 ||
            current.playerIndex == current.stoneIndex2 ||
            current.playerIndex == current.stoneIndex3 ||
            current.playerIndex == current.stoneIndex4 ||
            current.playerIndex == current.thornIndex1 ||
            current.playerIndex == current.thornIndex2 ||
            current.playerIndex == current.thornIndex3
          ) {
            setFailureModal(true)
            setGameState({
              trophyIndex: current.trophyIndex,
              stoneIndex1: current.stoneIndex1,
              stoneIndex2: current.stoneIndex2,
              stoneIndex3: current.stoneIndex3,
              stoneIndex4: current.stoneIndex4,
              stoneIndex5: current.stoneIndex5,
              blackHoleIndex1: current.blackHoleIndex1,
              blackHoleIndex2: current.blackHoleIndex2,
              blackHoleIndex3: current.blackHoleIndex3,
              thornIndex1: current.thornIndex1,
              thornIndex2: current.thornIndex2,
              thornIndex3: current.thornIndex3,
              keyIndex: current.keyIndex,
              playerIndex: functionGetIndexFromXY(currentX, currentY),
            })
          } else {
            setFailureModal(true)
            setGameState({
              trophyIndex: current.trophyIndex,
              stoneIndex1: current.stoneIndex1,
              stoneIndex2: current.stoneIndex2,
              stoneIndex3: current.stoneIndex3,
              stoneIndex4: current.stoneIndex4,
              stoneIndex5: current.stoneIndex5,
              blackHoleIndex1: current.blackHoleIndex1,
              blackHoleIndex2: current.blackHoleIndex2,
              blackHoleIndex3: current.blackHoleIndex3,
              thornIndex1: current.thornIndex1,
              thornIndex2: current.thornIndex2,
              thornIndex3: current.thornIndex3,
              keyIndex: current.keyIndex,
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
      trophyIndex: 0,
      stoneIndex1: 1,
      stoneIndex2: 2,
      stoneIndex3: 3,
      stoneIndex4: 4,
      stoneIndex5: 11,
      blackHoleIndex1: 6,
      blackHoleIndex2: 13,
      blackHoleIndex3: 16,
      thornIndex1: 7,
      thornIndex2: 8,
      thornIndex3: 9,
      keyIndex: 10,
    })
  }
  useEffect(() => {
    if (successModal === true) {
      const confettiSettings = { target: 'my-canvas' }
      const confetti = new ConfettiGenerator(confettiSettings)
      confetti.render()
      setTimeout(() => {
        router.push('http://localhost:3000/camps/awesome-noob/level-9')
        confetti.clear()
      }, 5000)
      setTimeout(() => {
        setSuccessModal(false)
      }, 2000)
    } else if (failureModal === true) {
      setTimeout(() => {
        setFailureModal(false)
      }, 2000)
    }
  }, [successModal, failureModal, router])
  return (
    <div>
      <div className="w-[200px] h-[50px] m-6 mb-0 md:mb-32">
        {successModal === false ? null : <ToastSuccess setModals={setSuccessModal} />}
        {failureModal === false ? null : <ToastFailure setModals={setFailureModal} />}
      </div>
      <div className="flex flex-col flex-wrap justify-center items-center w-full md:flex md:flex-row md:justify-center md:item-center">
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
                    src="/static/images/chess.png"
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
                {gameState?.blackHoleIndex3 === index ? (
                  <Image
                    className=""
                    src="/static/images/blackhole.png"
                    alt="User"
                    width="75"
                    height="100"
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
                {gameState?.keyIndex === index ? (
                  <Image
                    className=""
                    src="/static/images/keys.png"
                    alt="User"
                    width="50"
                    height="50"
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

          {commandlength < 9 ? (
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
                className="border rounded-xl  mx-2 py-2 px-4"
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
  )
}
const ToastSuccess = () => {
  return (
    <div className="flex flex-row justify-center items-center border-2 border-black bg-black rounded-lg p-1">
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
    <div className="flex flex-row justify-start items-center border-2 border-black bg-black rounded-lg p-1">
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
        destination: '/',
      },
    }
  }
  return {
    props: {
      isAuthenticated: true,
      dynamoToken: session.dynamoToken,
    }, // will be passed to the page component as props
  }
}
