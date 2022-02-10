import React, {useState} from 'react'
import { Button, Htag, P, Tag, Rating, Input, Textarea } from '../components'
import { withLayout } from '../layout/Layout'
import axios from 'axios'
import {GetStaticProps} from 'next'
import {MenuItem} from '../interfaces/menu.interface'
import { API } from '../helpers/api'



function Home({menu}:HomeProps):JSX.Element {
  const [rating, setRating] = useState<number>(4)

  return (
    <div>
      <Htag tag='h1'> Welcome to coursefinder</Htag>
      <Htag tag='h3'> Choose courses to start</Htag>

    </div>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data:menu} = await axios.post<MenuItem[]>(API.topPage.find,{firstCategory})
  return{
    props:{
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
}