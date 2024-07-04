"use client"

import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Navbar from '@/components/navbar'
import ProjectItem from '@/components/project_item'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import Project from '@/data/project_model'
import getProjectsFromApi from '@/data/project_repo'
import { ProjectContext, ProjectContextProps } from '@/providers/project_context'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const projectState = useContext(ProjectContext);

  return (
        <main className={styles.center+"md:ml-16 md:mr-16 mt-10 flex flex-col justify-center"}>
            <section className='w-full flex h-[86vh]'>
              <div className='flex justify-center items-center'>
                <div className='mx-14 text-white'>
                  <div className='text-5xl text-tertiary'>AI-POWERED INSIGHTS MEET REAL USER EXPERIENCES</div>
                  <div className='text-lg dark:text-white text-slate-700'>Leverage user reviews and A.I analysis for smarter choices on various SOLANA projects</div>
                </div>
              </div>
              <div className='md:flex justify-center ml-5 items-center animate-pulse'>
                <img src="/belp_landing.png" width={700} height={700} alt="My Image" />
              </div>
            </section>
            
              
              {projectState?.projects && (
                <section className='mx-2'>
                    <div className='flex justify-between my-2 w-full items-center'>
                      <div>
                        <h1 className='text-2xl'>Top Projects</h1>
                        <hr className='w-10' />
                      </div>
                      <Link href='/projects'>
                        <span className='text-primary hover:opacity-80'>See All</span>
                      </Link>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-5'>
                      {
                        projectState?.projects.map(
                          (value, index)=>{
                            if(index < 3){
                              return (
                                <div key={index}>
                                  <ProjectItem
                                    project={value} />
                                </div>
                              );
                            }
                          }
                        )
                      }
                    </div>
                </section>
              )}
        </main>
  )
}
