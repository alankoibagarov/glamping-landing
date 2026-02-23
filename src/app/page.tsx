import { Mountain, MoonStar, Tent, Trees, Waves } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"

const stays = [
  {
    icon: Tent,
    name: "Forest Bell Tents",
    description: "Spacious canvas tents with real beds, heating, and private decks.",
    meta: "Sleeps 2–4 • Private fire pit",
  },
  {
    icon: Trees,
    name: "Canopy Treehouses",
    description: "Elevated cabins with panoramic forest views and wraparound terraces.",
    meta: "Sleeps 2 • Outdoor bath",
  },
  {
    icon: Waves,
    name: "Riverfront Domes",
    description: "Geodesic domes with skylights for stargazing and sunrise over the water.",
    meta: "Sleeps 2–3 • Heated floors",
  },
] as const

const experiences = [
  "Guided stargazing with local astronomers",
  "Fire-cooked breakfasts with seasonal ingredients",
  "Forest bathing & sunrise yoga sessions",
  "Private hot tubs under the night sky",
] as const

const faqs = [
  {
    q: "What is included in my stay?",
    a: "Every stay includes high-quality bedding, towels, local coffee and tea, breakfast basket, firewood, and access to shared amenities like hot tubs and communal lounge.",
  },
  {
    q: "Is glamping suitable for families?",
    a: "Yes. Our bell tents and riverfront domes can sleep up to four guests, and we provide optional kids’ beds, games, and family-friendly experiences on request.",
  },
  {
    q: "Do you operate year-round?",
    a: "We are open from early April through late November. Selected accommodations with heating are available during shoulder seasons.",
  },
  {
    q: "How do I book?",
    a: "Use the “Check availability” button to send us your preferred dates. We’ll respond within 24 hours with options and a secure payment link.",
  },
] as const

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <StaysSection />
        <ExperienceSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[url('/hero-image.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply bg-primary/50 h-[100dvh]"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-72 bg-[radial-gradient(circle_at_top,_rgba(251,244,199,0.45)_0,_transparent_60%)] opacity-80" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:flex-row lg:items-center lg:pb-24 lg:pt-20">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <Mountain className="h-3 w-3" />
            </span>
            Wilderness, without giving up comfort.
          </div>
          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your boutique escape
              <span className="block text-white">between forest and sky.</span>
            </h1>
            <p className="max-w-xl text-balance text-sm text-white/85 sm:text-base ">
              Wake up to birdsong, sip coffee on your private deck, and fall asleep
              under a sky full of stars. Aurora Glamping is a thoughtfully designed
              retreat for people who want nature, not noise.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-6 text-sm shadow-md shadow-primary/20 bg-emerald-500 hover:bg-emerald-600 text-white"
              color="red"
            >
              <a href="#cta">Check dates & request stay</a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="rounded-full px-4 text-sm text-white"
            >
              <a href="#experience">Explore the experience</a>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/85">
            <span className="hidden h-4 w-px bg-border sm:inline-block" />
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="rounded-full border-emerald-500/80 border-2 text-white/85">
                ★ 4.9 average rating
              </Badge>
              <span>Based on 300+ guest stays</span>
            </div>
            <span className="hidden h-4 w-px bg-border sm:inline-block" />
            <div className="flex flex-wrap gap-2">
              <span>2 hours from the city</span>
              <span className="hidden text-xs text-white/85 sm:inline">
                • Sustainable materials • Low light pollution
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/30 via-emerald-300/20 to-sky-300/30 blur-2xl" />
            <Card className="relative overflow-hidden rounded-3xl border-border/60 bg-gradient-to-br from-background/80 via-background/95 to-background shadow-xl shadow-emerald-900/10">
              <CardHeader className="gap-1 border-b border-border/60 bg-gradient-to-r from-primary/5 via-background to-background/40 pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Tent className="h-4 w-4" />
                    </span>
                    Forest Bell Tent 03
                  </CardTitle>
                  <Badge className="rounded-full bg-emerald-500/10 text-xs font-medium text-emerald-700">
                    Best for first-time glampers
                  </Badge>
                </div>
                <CardDescription className="text-xs text-muted-foreground">
                  A light-filled canvas tent tucked between pines, with a king bed,
                  fiber blankets, and a private fire pit.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5 pt-5">
                <div className="grid grid-cols-2 gap-3 text-xs sm:grid-cols-3">
                  <FeaturePill label="Heated bedding" />
                  <FeaturePill label="Private deck" />
                  <FeaturePill label="Stargazing skylight" />
                  <FeaturePill label="Pour-over coffee bar" />
                  <FeaturePill label="Onsite parking" />
                  <FeaturePill label="Fast Wi‑Fi (when you want it)" />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-muted/80 px-4 py-3 text-xs">
                  <div className="space-y-0.5">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      Summer escape offer
                    </p>
                    <p className="text-sm font-medium">
                      From £190 / night
                      <span className="ml-1 text-xs text-muted-foreground">
                        (2-night minimum)
                      </span>
                    </p>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-4 text-xs shadow-sm"
                  >
                    <a href="#cta">Request this stay</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturePill({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/90 px-3 py-1 text-[11px] font-medium text-muted-foreground shadow-xs">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      {label}
    </div>
  )
}

function AboutSection() {
  return (
    <section
      id="about"
      className="border-b bg-background/60 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-4">
            <Badge className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-primary">
              ABOUT THE RETREAT
            </Badge>
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              A slower kind of luxury, rooted in the landscape.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Aurora Glamping is a small, design-led camp nestled between forest, river,
              and open sky. Every cabin, tent, and dome is placed to protect the land,
              preserve dark skies, and feel quietly private.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Think hotel-grade bedding, hot showers, and thoughtful rituals like
              pour-over coffee, stargazing evenings, and locally sourced breakfast
              baskets — all without losing the crackle of the fire or the sound of
              nightfall.
            </p>
            <dl className="mt-4 grid grid-cols-2 gap-4 text-xs sm:text-sm md:grid-cols-3">
              <Stat label="Acres of wild land" value="18" />
              <Stat label="Max guests on site" value="28" />
              <Stat label="Average clear nights / year" value="210" />
            </dl>
          </div>
          <Card className="relative overflow-hidden rounded-3xl border-border/70 bg-gradient-to-br from-primary/5 via-background to-background shadow-lg shadow-emerald-900/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">
                What glamping feels like at Aurora
              </CardTitle>
              <CardDescription className="text-xs">
                A stay designed for people who want nature, comfort, and space to breathe.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-muted-foreground">
              <BulletItem title="Arrive to a lit fire and warm bedding." />
              <BulletItem title="Sleep in real beds with high-thread-count linen." />
              <BulletItem title="Showers, proper toilets, and heated facilities." />
              <BulletItem title="Shared lounge with books, records, and tea." />
              <BulletItem title="No cars by tents — just birds, wind, and water." />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1 rounded-2xl border border-border/70 bg-muted/40 px-3 py-3">
      <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </dt>
      <dd className="text-lg font-semibold tracking-tight">{value}</dd>
    </div>
  )
}

function BulletItem({ title }: { title: string }) {
  return (
    <div className="flex gap-2">
      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
      <p>{title}</p>
    </div>
  )
}

function StaysSection() {
  return (
    <section
      id="stays"
      className="border-b bg-gradient-to-b from-background/80 to-muted/90 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <Badge className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-primary">
              STAYS
            </Badge>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Choose your way to sleep under the stars.
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
              Each stay has its own character — from secluded treehouses in the canopy
              to riverfront domes with skylights for watching meteors dance overhead.
            </p>
          </div>
          <div className="text-xs text-muted-foreground">
            Perfect for couples, small groups, and families seeking restorative time
            in nature.
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {stays.map((stay) => (
            <Card
              key={stay.name}
              className="group flex h-full flex-col justify-between rounded-3xl border-border/70 bg-background/90 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader className="gap-2 pb-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <stay.icon className="h-4 w-4" />
                  </span>
                  <Badge
                    variant="outline"
                    className="rounded-full border-emerald-200 bg-emerald-50/60 text-[11px] font-medium text-emerald-700"
                  >
                    Limited availability
                  </Badge>
                </div>
                <CardTitle className="text-sm font-semibold tracking-tight">
                  {stay.name}
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground">
                  {stay.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between space-y-4 pb-5">
                <p className="text-xs text-muted-foreground">{stay.meta}</p>
                <Button
                  asChild
                  size="sm"
                  className="mt-2 w-full rounded-full bg-primary/90 text-xs shadow-sm group-hover:bg-primary"
                >
                  <a href="#cta">Check dates for this stay</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          id="cta"
          className="mt-10 rounded-3xl border border-dashed border-primary/30 bg-primary/5 px-4 py-5 sm:px-6 sm:py-6 lg:px-8"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Simple booking, personal reply
              </p>
              <p className="text-sm text-muted-foreground sm:text-base">
                Share your desired dates and group size. We’ll respond within 24 hours
                with availability and a custom quote.
              </p>
            </div>
            <Button
              size="lg"
              className="w-full rounded-full px-6 text-sm shadow-md shadow-primary/20 md:w-auto"
            >
              Send booking request
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-b bg-background/60 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
          <div className="space-y-4">
            <Badge className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-primary">
              THE EXPERIENCE
            </Badge>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Days shaped by the light — not your inbox.
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Morning mist over the river, golden-hour walks through the pines, and
              late-night conversations by the fire. Aurora is built for unhurried days
              with just enough structure to feel taken care of.
            </p>
            <ul className="mt-2 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {experiences.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-2xl border border-border/70 bg-muted/40 px-3 py-3 text-xs sm:text-sm"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="rounded-3xl border-border/70 bg-gradient-to-br from-background via-background to-primary/5 shadow-md shadow-emerald-900/10">
            <CardHeader className="gap-1 pb-3">
              <CardTitle className="text-sm">
                A day at Aurora, in three beats
              </CardTitle>
              <CardDescription className="text-xs">
                From sunrise to starlight, here&apos;s how your stay might unfold.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-xs text-muted-foreground">
              <TimelineItem
                time="Morning"
                title="Wake up with the forest"
                description="Step out onto your deck with a mug of local coffee as the valley fills with birdsong and soft light."
              />
              <TimelineItem
                time="Afternoon"
                title="Choose adventure or deep rest"
                description="Head to the river for a cold dip, take a forest walk, or curl up in the lounge with a book and herbal tea."
              />
              <TimelineItem
                time="Night"
                title="Fireside stories & stars"
                description="After a slow dinner, join our hosted stargazing session or soak in a hot tub beneath a sky full of constellations."
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function TimelineItem(props: {
  time: string
  title: string
  description: string
}) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center pt-0.5">
        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {props.time}
        </span>
        <span className="mt-1 h-full w-px rounded-full bg-border" />
      </div>
      <div className="space-y-1.5">
        <p className="text-xs font-medium text-foreground">{props.title}</p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

function FAQSection() {
  return (
    <section
      id="faq"
      className="border-b bg-background/60 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 text-center">
          <Badge className="mx-auto rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-primary">
            FAQ
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Answers before you pack your bag.
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            If you still have questions after reading these, send us a note — we&apos;re
            happy to help you plan your stay.
          </p>
        </div>
        <div className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, index) => (
              <AccordionItem key={item.q} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left text-sm font-medium">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-background/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
            <MoonStar className="h-3 w-3" />
          </span>
          <span className="font-medium text-foreground">Aurora Glamping</span>
          <span className="hidden h-3 w-px bg-border sm:inline-block" />
          <span className="hidden text-xs sm:inline">
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
        <div className="flex flex-wrap gap-3 text-[11px] sm:justify-end">
          <span>Hand-built with Next.js, Tailwind, and shadcn/ui.</span>
          <span className="hidden sm:inline">•</span>
          <span>Quiet hours from 22:00 – 07:00.</span>
        </div>
      </div>
    </footer>
  )
}
