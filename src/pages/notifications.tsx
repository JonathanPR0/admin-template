import Layout from '@/components/template/Layout'
import useAppData from '@/data/hook/UseAppData'
import React from 'react'

export default function Notifications() {
  const data = useAppData()

  return (
    <Layout title='Notificações' subtitle='Página para exibição das notificações' >
      <h3>Além disso, o Next.js também oferece suporte à renderização do lado do servidor (SSR), o que significa que as páginas são geradas no servidor e enviadas para o navegador do usuário. Isso pode melhorar ainda mais o desempenho, especialmente em aplicativos que precisam lidar com grande quantidade de dados ou que precisam ser indexados pelos mecanismos de busca.</h3>
    </Layout>)
}
