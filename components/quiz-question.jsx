import Link from 'next/link'

export default function quizQuestionPage() {
  return (
    <div>
      <div className="flex flex-row border-4 border-black-400 mt-5 pb-5 bg-black-400 rounded-t-lg mx-5">
        <div className="flex flex-1 mt-5 justify-center font-bold">
          <Link href="/quiz-dashboard">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-left"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
          </Link>
        </div>
        <div className="flex flex-1 mt-5 justify-center font-bold">PHP 1</div>
        <div className="flex flex-1"></div>
      </div>
      <div className="flex flex-col border-4 border-purple-100 mt-0 mb-5 bg-white mx-5 rounded-b-lg">
        <div>
          <img
            className="flex my-8 "
            src="https://i.postimg.cc/13cQFMSy/Pembahasan-Soal-Kombinasi-2.jpg"
            alt="picture"
            title=""
          />
        </div>
        <div className="flex justify-center mx-28 rounded-full py-3 px-4 bg-yellow mb-5 text-white">
          Nilai 100 Point
        </div>
        <div className="text-center mx-4 my-4">
          Sebuah Kode PHP yang paling tepat pada awal dan akhir adalah
        </div>
        <Link href="/quiz-score">
          <div className="flex flex-row border-4 border-white justify-center">
            <div className="flex mx-2 py-3 px-4 flex-row border-2 rounded-full border-blue bg-blue text-purple-100">
              <div>5.5 liter</div>
            </div>
            <div className="flex mx-2 py-3 px-4 flex-row border-2 rounded-full border-blue bg-blue text-purple-100">
              <div>6.6 liter</div>
            </div>
            <div className="flex mx-2 py-3 px-4 flex-row border-2 rounded-full border-blue bg-blue text-purple-100">
              <div>7.6 liter</div>
            </div>
          </div>
        </Link>
        <Link href="/quiz-score">
          <div className="flex flex-row border-4 my-5 border-white justify-center">
            <div className="flex mx-2 py-3 px-4 flex-row border-2 rounded-full border-blue bg-blue text-purple-100">
              <div>5.5 liter</div>
            </div>
            <div className="flex mx-2 py-3 px-4 flex-row border-2 rounded-full border-blue bg-blue text-purple-100">
              <div>6.6 liter</div>
            </div>
            <div className="flex mx-2 py-3 px-4 flex-row border-2 rounded-full border-blue bg-blue text-purple-100">
              <div>7.6 liter</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
