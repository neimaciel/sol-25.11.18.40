import { Card } from '../types';

export const columns = [
  { id: 'offer', title: 'Oferta de Cargas', color: 'bg-blue-100' },
  { id: 'broadcast', title: 'Divulgação', color: 'bg-purple-100' },
  { id: 'negotiation', title: 'Em Negociação', color: 'bg-yellow-100' },
  { id: 'documentation', title: 'Documentação', color: 'bg-orange-100' },
  { id: 'risk', title: 'Análise de Risco', color: 'bg-red-100' },
  { id: 'contract', title: 'Contratação', color: 'bg-green-100' },
  { id: 'loading', title: 'Carregamento', color: 'bg-teal-100' },
  { id: 'transit', title: 'Em Trânsito', color: 'bg-cyan-100' },
  { id: 'unloading', title: 'Descarregamento', color: 'bg-indigo-100' },
  { id: 'completed', title: 'Concluído', color: 'bg-gray-100' }
];

function createChatHistory(messages: any[]) {
  return messages.map((msg, index) => ({
    id: `msg-${index}`,
    ...msg,
    status: 'read'
  }));
}

export const initialCards: Record<string, Card[]> = {
  offer: [
    {
      id: 'card-1',
      code: 'CARGA-001',
      title: 'Carga São Paulo → Rio de Janeiro',
      origin: {
        name: 'CD São Paulo',
        address: 'Av. Paulista, 1000',
        city: 'São Paulo',
        state: 'SP'
      },
      destination: {
        name: 'CD Rio',
        address: 'Av. Brasil, 500',
        city: 'Rio de Janeiro',
        state: 'RJ'
      },
      status: 'Nova oferta',
      type: 'Carga Completa',
      weight: 12000,
      volume: 45,
      value: 3800,
      stops: [],
      documents: [],
      vehicle: {
        type: 'Truck',
        bodywork: ['Baú']
      },
      dates: {
        pickup: new Date('2024-03-20'),
        delivery: new Date('2024-03-21')
      },
      tags: ['Carga Geral'],
      chat: createChatHistory([
        {
          sender: 'Sistema',
          content: 'Nova carga cadastrada no sistema.',
          timestamp: new Date('2024-03-19T14:00:00'),
          type: 'text'
        }
      ])
    },
    {
      id: 'card-2',
      code: 'CARGA-002',
      title: 'Carga Campinas → Santos',
      origin: {
        name: 'CD Campinas',
        address: 'Rod. Anhanguera, 500',
        city: 'Campinas',
        state: 'SP'
      },
      destination: {
        name: 'Porto de Santos',
        address: 'Av. Portuária, 100',
        city: 'Santos',
        state: 'SP'
      },
      status: 'Nova oferta',
      type: 'Carga Completa',
      weight: 15000,
      volume: 55,
      value: 4200,
      stops: [],
      documents: [],
      vehicle: {
        type: 'Carreta',
        bodywork: ['Sider']
      },
      dates: {
        pickup: new Date('2024-03-21'),
        delivery: new Date('2024-03-22')
      },
      tags: ['Exportação'],
      chat: createChatHistory([
        {
          sender: 'Sistema',
          content: 'Carga disponível para cotação.',
          timestamp: new Date('2024-03-19T15:30:00'),
          type: 'text'
        }
      ])
    }
  ],
  broadcast: [
    {
      id: 'card-3',
      code: 'CARGA-003',
      title: 'Carga Curitiba → Florianópolis',
      origin: {
        name: 'CD Curitiba',
        address: 'Av. das Torres, 800',
        city: 'Curitiba',
        state: 'PR'
      },
      destination: {
        name: 'CD Florianópolis',
        address: 'Rod. SC-401, 200',
        city: 'Florianópolis',
        state: 'SC'
      },
      status: 'Em divulgação',
      type: 'Carga Fracionada',
      weight: 8000,
      volume: 30,
      value: 2800,
      stops: [],
      documents: [],
      vehicle: {
        type: 'Truck',
        bodywork: ['Baú']
      },
      dates: {
        pickup: new Date('2024-03-22'),
        delivery: new Date('2024-03-23')
      },
      tags: ['Carga Geral'],
      chat: createChatHistory([
        {
          sender: 'Sistema',
          content: 'Carga em processo de divulgação.',
          timestamp: new Date('2024-03-19T16:00:00'),
          type: 'text'
        }
      ])
    },
    {
      id: 'card-4',
      code: 'CARGA-004',
      title: 'Carga Porto Alegre → Curitiba',
      origin: {
        name: 'CD Porto Alegre',
        address: 'Av. Assis Brasil, 1500',
        city: 'Porto Alegre',
        state: 'RS'
      },
      destination: {
        name: 'CD Curitiba',
        address: 'Rod. BR-116, 300',
        city: 'Curitiba',
        state: 'PR'
      },
      status: 'Em divulgação',
      type: 'Carga Completa',
      weight: 18000,
      volume: 65,
      value: 5200,
      stops: [],
      documents: [],
      vehicle: {
        type: 'Carreta',
        bodywork: ['Sider']
      },
      dates: {
        pickup: new Date('2024-03-23'),
        delivery: new Date('2024-03-24')
      },
      tags: ['Carga Pesada'],
      chat: createChatHistory([
        {
          sender: 'Sistema',
          content: 'Divulgação iniciada para transportadoras.',
          timestamp: new Date('2024-03-19T16:30:00'),
          type: 'text'
        }
      ])
    }
  ],
  negotiation: [
    {
      id: 'card-5',
      code: 'CARGA-005',
      title: 'Carga Belo Horizonte → São Paulo',
      origin: {
        name: 'CD Belo Horizonte',
        address: 'Av. Amazonas, 2000',
        city: 'Belo Horizonte',
        state: 'MG'
      },
      destination: {
        name: 'CD São Paulo',
        address: 'Rod. Anhanguera, 1000',
        city: 'São Paulo',
        state: 'SP'
      },
      status: 'Em negociação',
      type: 'Carga Completa',
      weight: 14000,
      volume: 50,
      value: 4500,
      stops: [],
      documents: [],
      vehicle: {
        type: 'Carreta',
        bodywork: ['Baú']
      },
      dates: {
        pickup: new Date('2024-03-24'),
        delivery: new Date('2024-03-25')
      },
      tags: ['Prioritário'],
      chat: createChatHistory([
        {
          sender: 'Transportadora',
          content: 'Proposta enviada: R$ 4.200',
          timestamp: new Date('2024-03-19T10:00:00'),
          type: 'text'
        },
        {
          sender: 'Operador',
          content: 'Analisando proposta.',
          timestamp: new Date('2024-03-19T10:15:00'),
          type: 'text'
        }
      ])
    }
  ],
  documentation: [
    {
      id: 'card-6',
      code: 'CARGA-006',
      title: 'Carga Salvador → Recife',
      origin: {
        name: 'CD Salvador',
        address: 'Av. Paralela, 3000',
        city: 'Salvador',
        state: 'BA'
      },
      destination: {
        name: 'CD Recife',
        address: 'Av. Recife, 500',
        city: 'Recife',
        state: 'PE'
      },
      status: 'Docs pendentes',
      type: 'Carga Completa',
      weight: 16000,
      volume: 58,
      value: 5800,
      stops: [],
      documents: [],
      vehicle: {
        type: 'Carreta',
        bodywork: ['Baú Refrigerado']
      },
      dates: {
        pickup: new Date('2024-03-25'),
        delivery: new Date('2024-03-26')
      },
      tags: ['Refrigerada'],
      chat: createChatHistory([
        {
          sender: 'Sistema',
          content: 'Aguardando documentação do motorista.',
          timestamp: new Date('2024-03-19T11:00:00'),
          type: 'text'
        }
      ])
    }
  ],
  risk: [
    {
      id: 'card-7',
      code: 'CARGA-007',
      title: 'Carga Fortaleza → Natal',
      origin: {
        name: 'CD Fortaleza',
        address: 'Av. Washington Soares, 1000',
        city: 'Fortaleza',
        state: 'CE'
      },
      destination: {
        name: 'CD Natal',
        address: 'Av. Natal, 300',
        city: 'Natal',
        state: 'RN'
      },
      status: 'Em análise',
      type: 'Carga Completa',
      weight: 13000,
      volume: 48,
      value: 4100,
      stops: [],
      documents: [],
      vehicle: {
        type: 'Truck',
        bodywork: ['Baú']
      },
      dates: {
        pickup: new Date('2024-03-26'),
        delivery: new Date('2024-03-27')
      },
      tags: ['Carga Geral'],
      chat: createChatHistory([
        {
          sender: 'Sistema',
          content: 'Análise de risco em andamento.',
          timestamp: new Date('2024-03-19T12:00:00'),
          type: 'text'
        }
      ])
    }
  ],
  contract: [
    {
      id: 'card-8',
      code: 'CARGA-008',
      title: 'Carga Manaus → Belém',
      origin: {
        name: 'CD Manaus',
        address: 'Av. Djalma Batista, 1500',
        city: 'Manaus',
        state: 'AM'
      },
      destination: {
        name: 'CD Belém',
        address: 'Av. Almirante Barroso, 400',
        city: 'Belém',
        state: 'PA'
      },
      status: 'Contratação',
      type: 'Carga Completa',
      weight: 20000,
      volume: 72,
      value: 8500,
      stops: [],
      documents: [],
      vehicle: {
        type: 'Carreta',
        bodywork: ['Sider']
      },
      dates: {
        pickup: new Date('2024-03-27'),
        delivery: new Date('2024-03-28')
      },
      tags: ['Carga Pesada'],
      chat: createChatHistory([
        {
          sender: 'Sistema',
          content: 'Contrato em processo de assinatura.',
          timestamp: new Date('2024-03-19T13:00:00'),
          type: 'text'
        }
      ])
    }
  ],
  loading: [
    {
      id: 'card-9',
      code: 'CARGA-009',
      title: 'Carga Goiânia → Brasília',
      origin: {
        name: 'CD Goiânia',
        address: 'Av. Perimetral Norte, 2000',
        city: 'Goiânia',
        state: 'GO'
      },
      destination: {
        name: 'CD Brasília',
        address: 'SIA Trecho 3',
        city: 'Brasília',
        state: 'DF'
      },
      status: 'Em carregamento',
      type: 'Carga Completa',
      weight: 11000,
      volume: 40,
      value: 3200,
      stops: [],
      documents: [],
      vehicle: {
        type: 'Truck',
        bodywork: ['Baú']
      },
      dates: {
        pickup: new Date('2024-03-19'),
        delivery: new Date('2024-03-20')
      },
      tags: ['Carga Geral'],
      chat: createChatHistory([
        {
          sender: 'Motorista',
          content: 'Iniciando carregamento.',
          timestamp: new Date('2024-03-19T14:00:00'),
          type: 'text'
        }
      ])
    }
  ],
  transit: [
    {
      id: 'card-10',
      code: 'CARGA-010',
      title: 'Carga Campo Grande → Cuiabá',
      origin: {
        name: 'CD Campo Grande',
        address: 'Av. Costa e Silva, 1000',
        city: 'Campo Grande',
        state: 'MS'
      },
      destination: {
        name: 'CD Cuiabá',
        address: 'Av. Miguel Sutil, 500',
        city: 'Cuiabá',
        state: 'MT'
      },
      status: 'Em trânsito',
      type: 'Carga Completa',
      weight: 17000,
      volume: 62,
      value: 5500,
      stops: [],
      documents: [],
      vehicle: {
        type: 'Carreta',
        bodywork: ['Sider']
      },
      dates: {
        pickup: new Date('2024-03-19'),
        delivery: new Date('2024-03-20')
      },
      tags: ['Carga Pesada'],
      chat: createChatHistory([
        {
          sender: 'Motorista',
          content: 'Tudo normal na viagem.',
          timestamp: new Date('2024-03-19T15:00:00'),
          type: 'text'
        }
      ])
    }
  ],
  unloading: [
    {
      id: 'card-11',
      code: 'CARGA-011',
      title: 'Carga Vitória → Rio de Janeiro',
      origin: {
        name: 'CD Vitória',
        address: 'Av. Fernando Ferrari, 800',
        city: 'Vitória',
        state: 'ES'
      },
      destination: {
        name: 'CD Rio',
        address: 'Av. Brasil, 15000',
        city: 'Rio de Janeiro',
        state: 'RJ'
      },
      status: 'Descarregando',
      type: 'Carga Completa',
      weight: 19000,
      volume: 68,
      value: 6200,
      stops: [],
      documents: [],
      vehicle: {
        type: 'Carreta',
        bodywork: ['Baú']
      },
      dates: {
        pickup: new Date('2024-03-18'),
        delivery: new Date('2024-03-19')
      },
      tags: ['Carga Geral'],
      chat: createChatHistory([
        {
          sender: 'Motorista',
          content: 'Iniciando processo de descarga.',
          timestamp: new Date('2024-03-19T15:30:00'),
          type: 'text'
        }
      ])
    }
  ],
  completed: [
    {
      id: 'card-12',
      code: 'CARGA-012',
      title: 'Carga São Paulo → Campinas',
      origin: {
        name: 'CD São Paulo',
        address: 'Av. Paulista, 1000',
        city: 'São Paulo',
        state: 'SP'
      },
      destination: {
        name: 'CD Campinas',
        address: 'Rod. Dom Pedro I, km 132',
        city: 'Campinas',
        state: 'SP'
      },
      status: 'Concluído',
      type: 'Carga Completa',
      weight: 10000,
      volume: 35,
      value: 2500,
      stops: [],
      documents: [],
      vehicle: {
        type: 'Truck',
        bodywork: ['Baú']
      },
      dates: {
        pickup: new Date('2024-03-18'),
        delivery: new Date('2024-03-19')
      },
      tags: ['Carga Geral'],
      chat: createChatHistory([
        {
          sender: 'Sistema',
          content: 'Entrega concluída com sucesso.',
          timestamp: new Date('2024-03-19T16:00:00'),
          type: 'text'
        },
        {
          sender: 'Cliente',
          content: 'Carga recebida em perfeitas condições.',
          timestamp: new Date('2024-03-19T16:05:00'),
          type: 'text'
        }
      ])
    }
  ]
};