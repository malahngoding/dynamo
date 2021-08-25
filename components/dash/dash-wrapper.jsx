/* eslint-disable @next/next/no-img-element */
import { useDashNav } from '@/modules/dash-nav.store'
import { Transition } from '@headlessui/react'
import { ChevronRight, Home, Settings, User } from 'tabler-icons-react'
import { PrimaryButton } from '../design/button'
import { Tab } from '@headlessui/react'
import dynamic from 'next/dynamic'
import { useLockBodyScroll } from '@/hooks/useScrollBlock'

const DashComponent = dynamic(() => import('@/components/dash/dash'))
const UserComponent = dynamic(() => import('@/components/dash/user'))
const SettingsComponent = dynamic(() => import('@/components/dash/settings'))

export const DashWrapper = () => {
  const shown = useDashNav((state) => state.shown)
  const toggleNav = useDashNav((state) => state.toggleNav)

  return <>{shown && <Wrap toggleNav={toggleNav} shown={shown} />}</>
}

const Wrap = (props) => {
  // useLockBodyScroll()
  return (
    <Transition
      show={props.shown}
      enter="transform transition duration-[400ms]"
      enterFrom="opacity-0 rotate-[-120deg] scale-50"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <div className="z-30 fixed bottom-0 right-0 w-screen md:w-[414px] h-screen bg-white dark:bg-black border-l-2 border-black dark:border-white transition-opacity">
        <PrimaryButton
          className="rounded-full m-4"
          onClick={() => {
            props.toggleNav()
          }}
        >
          <ChevronRight />
        </PrimaryButton>
        <Tab.Group>
          <Tab.Panels className="px-4">
            <Tab.Panel>
              <DashComponent />
            </Tab.Panel>
            <Tab.Panel>
              <UserComponent />
            </Tab.Panel>
            <Tab.Panel>
              <SettingsComponent />
            </Tab.Panel>
          </Tab.Panels>
          <Tab.List className="h-16 absolute bottom-0 border-t-2 border-black dark:border-white w-full flex flex-row justify-around items-center dark:text-black bg-white dark:bg-black-800">
            <Tab>
              {({ selected }) => (
                <>
                  <div
                    className={`flex flex-row justify-center items-center px-4 py-2 rounded-xl ${
                      selected ? 'bg-green-800' : 'bg-white'
                    }`}
                  >
                    <Home />
                    <h2 className="text-sm ml-2 font-bold hidden md:block">Dash</h2>
                  </div>
                </>
              )}
            </Tab>
            <Tab>
              {({ selected }) => (
                <>
                  <div
                    className={`flex flex-row justify-center items-center px-4 py-2 rounded-xl  ${
                      selected ? 'bg-blue-800' : 'bg-white'
                    }`}
                  >
                    <User />
                    <h2 className="text-sm ml-2 font-bold hidden md:block">Profil</h2>
                  </div>
                </>
              )}
            </Tab>
            <Tab>
              {({ selected }) => (
                <>
                  <div
                    className={`flex flex-row justify-center items-center px-4 py-2 rounded-xl  ${
                      selected ? 'bg-yellow-800' : 'bg-white'
                    }`}
                  >
                    <Settings />
                    <h2 className="text-sm ml-2 font-bold hidden md:block">Pengaturan</h2>
                  </div>
                </>
              )}
            </Tab>
          </Tab.List>
        </Tab.Group>
      </div>
    </Transition>
  )
}
