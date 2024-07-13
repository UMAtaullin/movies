import cls from './Footer.module.css'

function Footer() {
  return (
    <footer className={cls.footer}>
      © {new Date().getFullYear()} Copyright Text
    </footer>
  )
}

export { Footer }
