import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Navbar from '@/components/navbar'
import ProjectItem from '@/components/project_item'
import Link from 'next/link'
import ProjectProviders from '@/providers/project_providers'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ProjectProviders>
      <main className={styles.center+"ml-16 mr-16 absolute flex flex-col justify-center"}>
          <section className='w-full flex h-[88vh]'>
            <div className='flex justify-center items-center'>
              <div className='mx-14 text-white'>
                <div className='text-5xl'>CREATE AND CONSUME BOOKS LIKE NEVER BEFORE</div>
                <div className='text-lg'>Revolutionize Your Reading Experience with Blockchain-Backed Book Creation and Reading Platform </div>
              </div>
            </div>
            <div className='md:flex justify-center mx-5 items-center'>
              <img src="/homeillu.jpg" width={500} height={500} alt="My Image" />
            </div>
          </section>
          <section>
            <div className='flex justify-between my-2'>
              <div>

              <h1 className='text-2xl'>Popular Projects</h1><hr className='w-10' />
              </div>
              <Link href='/projects'>
                <span>see more</span>
              </Link>
            </div>
            <div className='grid grid-cols-3 mx-8'>
              <ProjectItem />
              <ProjectItem />
              <ProjectItem />
            </div>
            {/* <div className='flex justify-end'>
              
            </div> */}
          </section>
          <footer className='flex justify-center mt-10'>
            <div>
              &#169; antoni
            </div>
          </footer>
        {/* <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>app/page.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </ProjectProviders>
  )
}
