import { Cormorant, Roboto_Mono } from 'next/font/google'

export const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],   // non-variable fonts need explicit weights
  variable: "--font-roboto-mono",
});