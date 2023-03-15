import Layout from '@/components/template/Layout'
import useAppData from '@/data/hook/UseAppData'
import React from 'react'

export default function Notifications() {
  const data = useAppData()

  return (
    <Layout title='Notifications' subtitle='Lorem ipsum sit amet adme' >
      <h3>O Context API é uma ferramenta do React que permite compartilhar dados entre componentes sem precisar passar props manualmente por toda a árvore de componentes.</h3>
    </Layout>)
}
