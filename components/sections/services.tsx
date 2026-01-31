'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const services = [
	{
		img: '/images/services/img-1.png',
		title: 'Коррекция ногтей',
		list: [
			{
				name: 'Решение проблем вросшего ногтя',
				link: '#',
			},
			{
				name: 'Установка скобы ЗТО и Фрезера',
				link: '#',
			},
			{
				name: 'Установка титановой нити',
				link: '#',
			},
			{
				name: 'Специальная скоба',
				link: '#',
			},
		],
	},
	{
		img: '/images/services/img-2.png',
		title: 'Мозоли и трещины',
		list: [
			{
				name: 'Удаление стержневой мозоли',
				link: '#',
			},
			{
				name: 'Обработка натоптышей',
				link: '#',
			},
			{
				name: 'Обработка стопы (в том числе диабетической)',
				link: '#',
			},
			{
				name: 'Удаление бородавок',
				link: '#',
			},
		],
	},
	{
		img: '/images/services/img-3.png',
		title: 'Медицинский педикюр',
		list: [
			{
				name: 'Медицинский педикюр',
				link: '#',
			},
			{
				name: 'EX Обработка стоп при гипергидрозе',
				link: '#',
			},
			{
				name: 'Гигиенический аппаратный педикюр',
				link: '#',
			},
			{
				name: 'Изготовление индивидуальных ортезов',
				link: '#',
			},
		],
	},
	{
		img: '/images/services/img-4.png',
		title: 'Грибок ногтей',
		list: [
			{
				name: 'Аппаратная обработка ногтевых пластин',
				link: '#',
			},
			{
				name: 'Устранение онихомикоза',
				link: '#',
			},
			{
				name: 'Обработка противогрибковыми препаратами',
				link: '#',
			},
			{
				name: 'Педикюр для пожилых',
				link: '#',
			},
		],
	},
]

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
}

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
}

export function Services() {
	return (
		<section id="services" className="py-20 lg:py-24 bg-slate-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}
					className="text-center max-w-2xl mx-auto mb-16"
				>
					<span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
						Наши услуги
					</span>
					<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
						Какие услуги оказывает подолог?
					</h2>
					<p className="text-lg text-slate-600">
						Подологи работают с проблемными стопами и изменёнными ногтевыми
						пластинами, мозолями, трещинами, локальным гиперкератозом, ногтями,
						склонными к врастанию, скручиванию. Владеют методами коррекции
						деформированных ногтей.
					</p>
				</motion.div>

				{/* Services Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8"
				>
					{services.map((service, index) => (
						<motion.div key={index} variants={itemVariants}>
							<Card className="h-full group cursor-pointer">
								<CardContent className="p-6 lg:p-8">
									<Image
										src={service.img}
										alt={service.title}
										width={80}
										height={80}
										className="w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
									/>
									<h3 className="text-xl font-semibold text-slate-900 mb-3">
										{service.title}
									</h3>
									<ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2">
										{service.list.map((item, idx) => (
											<li key={idx}>
												<a href={item.link}>{item.name}</a>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
