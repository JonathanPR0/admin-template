import Layout from '@/components/template/Layout'
import React from 'react'

export default function Home() {
  return (
    <Layout title='Página Inicial' subtitle='Página de informações gerais' >
      <h3>Next.js é um framework de desenvolvimento web para React que permite criar aplicativos web escaláveis e de alto desempenho. Com Next.js, é fácil criar aplicativos web modernos com renderização do lado do servidor (SSR), pré-renderização estática e gerenciamento de rotas dinâmicas.</h3>
      <h3>Uma das principais vantagens do Next.js é a sua capacidade de pré-renderizar páginas estáticas, o que significa que as páginas são renderizadas antes de serem enviadas ao navegador do usuário. Isso pode melhorar significativamente o desempenho do aplicativo, já que os usuários não precisam esperar o carregamento completo da página antes de começar a interagir com ela.</h3>
    </Layout>)
}
