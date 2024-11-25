import React from 'react';
import { Card, Title, AreaChart, DonutChart, BarChart, Text, Flex, Grid } from '@tremor/react';
import { Package, TrendingUp, CheckCircle2, CircleDollarSign, Clock, MapPin } from 'lucide-react';

const deliveryData = [
  {
    date: 'Jan',
    'No Prazo': 156,
    'Atrasadas': 12,
    'Antecipadas': 34,
  },
  {
    date: 'Fev',
    'No Prazo': 178,
    'Atrasadas': 8,
    'Antecipadas': 42,
  },
  {
    date: 'Mar',
    'No Prazo': 184,
    'Atrasadas': 15,
    'Antecipadas': 36,
  },
];

const routePerformance = [
  { route: 'SP → RJ', performance: 92 },
  { route: 'PR → SC', performance: 88 },
  { route: 'MG → SP', performance: 95 },
  { route: 'BA → PE', performance: 85 },
  { route: 'RS → PR', performance: 90 },
];

const vehicleDistribution = [
  { name: 'Truck', value: 45 },
  { name: 'Carreta', value: 35 },
  { name: 'Bitrem', value: 20 },
];

export default function BusinessIntelligence() {
  return (
    <div className="bg-gray-50 p-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Dashboard Operacional</h2>
          <p className="text-gray-600">Visão geral das operações logísticas</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card decoration="top" decorationColor="blue">
            <Flex>
              <div>
                <Text>Total de Cargas Ativas</Text>
                <Text className="mt-2 text-2xl font-bold">248</Text>
                <Text className="text-green-600">+12% vs. mês anterior</Text>
              </div>
              <Package className="h-12 w-12 text-blue-500" />
            </Flex>
          </Card>

          <Card decoration="top" decorationColor="green">
            <Flex>
              <div>
                <Text>Taxa de Entrega no Prazo</Text>
                <Text className="mt-2 text-2xl font-bold">94.5%</Text>
                <Text className="text-green-600">+2.3% vs. mês anterior</Text>
              </div>
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            </Flex>
          </Card>

          <Card decoration="top" decorationColor="amber">
            <Flex>
              <div>
                <Text>Faturamento Total</Text>
                <Text className="mt-2 text-2xl font-bold">R$ 1.2M</Text>
                <Text className="text-green-600">+15% vs. mês anterior</Text>
              </div>
              <CircleDollarSign className="h-12 w-12 text-amber-500" />
            </Flex>
          </Card>

          <Card decoration="top" decorationColor="rose">
            <Flex>
              <div>
                <Text>Tempo Médio de Entrega</Text>
                <Text className="mt-2 text-2xl font-bold">2.3 dias</Text>
                <Text className="text-red-600">+0.2 dias vs. mês anterior</Text>
              </div>
              <Clock className="h-12 w-12 text-rose-500" />
            </Flex>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <Title>Entregas por Mês</Title>
            <AreaChart
              className="h-72 mt-4"
              data={deliveryData}
              index="date"
              categories={['No Prazo', 'Atrasadas', 'Antecipadas']}
              colors={['emerald', 'red', 'blue']}
            />
          </Card>

          <Card>
            <Title>Performance por Rota</Title>
            <BarChart
              className="h-72 mt-4"
              data={routePerformance}
              index="route"
              categories={['performance']}
              colors={['blue']}
            />
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <Title>Distribuição de Veículos</Title>
            <DonutChart
              className="h-72 mt-4"
              data={vehicleDistribution}
              category="value"
              index="name"
              colors={['blue', 'cyan', 'indigo']}
            />
          </Card>

          <Card>
            <Title>Métricas de Eficiência</Title>
            <div className="mt-4 space-y-4">
              <Flex>
                <Text>Ocupação média dos veículos</Text>
                <Text className="font-medium">87%</Text>
              </Flex>
              <Flex>
                <Text>Custo médio por km</Text>
                <Text className="font-medium">R$ 3,45</Text>
              </Flex>
              <Flex>
                <Text>Satisfação do cliente</Text>
                <Text className="font-medium">4.8/5.0</Text>
              </Flex>
              <Flex>
                <Text>Taxa de incidentes</Text>
                <Text className="font-medium">0.5%</Text>
              </Flex>
              <Flex>
                <Text>Tempo médio de carga/descarga</Text>
                <Text className="font-medium">45 min</Text>
              </Flex>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}