import logo from './images/logo.png';
import bike from './images/bike.jpg';
import bharath from './images/bharath.png';
import Anand from './images/anand.png';
import vinay from './images/vinay.png';
import krishnan from './images/krishnan.jpeg';
import './App.css';
import { Col, Row } from 'antd';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { ArrowRightCircleIcon, Bars3Icon, CloudIcon, EyeIcon, MapIcon, UserGroupIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

function App() {

  const people = [
    {
      name: 'Krishnan Raghunathan',
      role: 'Founder / CEO',
      imageUrl:
        krishnan,
    },
    {
      name: "Vinay Choudhary",
      role: "East Africa Director",
      imageUrl:
        vinay,
    },
    {
      name: "Bharath Kumar Dandu",
      role: "Product Engineering Lead",
      imageUrl:
        bharath,
    },
    {
      name: "Anand Shah",
      role: "Strategy and Supply Chain Advisor",
      imageUrl: 
        Anand,
    }
    // More people...
  ]

  const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]

  const features = [
    {
      name: 'Vision',
      description:
        'We plan on creating a sustainable future by empowering gig workers with affordable, efficient, and eco-friendly electric vehicle solutions.',
      icon: EyeIcon,
    },
    {
      name: 'The Opportunity',
      description:
      'The arbitrage between the cost of electricity and petrol/ oil required to power EVs, creates an opportunity to green the transportation sector in a sustainable and scalable way for all value chain participants.',
      icon: CloudIcon,
    },
    {
      name: 'Trify Model',
      description:
        'We collaborate with OEMs and other existing supply chain participants, to build a comprehensive and ubiquitous EV infrastructure, financing, and maintenance network. Our motto is to integrate and complement rather than replicate what already exists.',
      icon: UserGroupIcon,
    },
    {
      name: 'Roadmap & Impact',
      description:
        "Our strategic expansion plan includes scalable growth and profitability, starting with 2 and 3 wheelers in East African markets. Trify's integrated approach delivers infrastructure returns, reduces CO2 emissions, and also increases gig workers' income.",
      icon: MapIcon,
    },
  ]

  const sectiontwoFeatures = [
    {
      name: 'Vision',
      description:
        'EV 2-wheelers have much lower operating costs, about 4/5th less for fuel and 1⁄2 less on maintenance.',
      icon: ArrowRightCircleIcon,
    },
    {
      description:
      '2 wheeler is a earning instrument for gig workers. Going EV means more money for less work hours',
      icon: ArrowRightCircleIcon,
    },
    {

      description:
        'EV vehicles, if built well, have better performance and riding experience than internal combusion enginge bikes',
        icon: ArrowRightCircleIcon,
    },
    {
      description:
      "Policy makers crave for EV with its positive impacts on forex savings, local incomes/ jobs and environment",
      icon: ArrowRightCircleIcon,
    },
  ]

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <div className="bg-white">
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-12 w-auto"
              src={logo}
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>

    <div className="relative isolate px-6 pt-14 lg:px-8">

      <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
       
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Trify
          </h1>
          <p className="mt-6 text-2xl leading-8 text-gray-600">
          A trusted, end to end solution for accelerating the electric vehicle transition
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Learn More
            </a>
            {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a> */}
          </div>
        </div>
      </div>

    </div>
  </div>

  <div className="bg-white py-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">About Trify</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to know about Trify
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our future can be broken up into the vision, opportunity, model, roadmap, and impact.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-700">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>



    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The math works today.</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Electric vehicles (EV) is already better than fuel, with irresistible economics for EV 2/3 wheelers. EV transition costs, including motorbikes, batteries and charging infrastructure, paybacks in 12-18 months, for business users who drive 80 - 100 kilometers a day.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {sectiontwoFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-green-600" aria-hidden="true" />
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={bike}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>

    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
           A high calibre, trusted team with proven expertise in the areas needed to succeed
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-orange-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
  );
}

export default App;
