import Image from 'next/image'

const Login = (): JSX.Element => {
  return (
    <div>
      <Image src="/media/login-bg.png" alt="background" layout="fill" objectFit="cover" quality={100} />
    </div>
  )
}

export default Login
