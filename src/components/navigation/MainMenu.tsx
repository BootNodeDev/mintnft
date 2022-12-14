import styled from 'styled-components'

import { useTranslations } from 'next-intl'

import { NavLink as BaseNavLink } from '@/src/components/navigation/NavLink'
import { sections } from '@/src/constants/sections'

const Wrapper = styled.nav`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakPoints.tabletLandscapeStart}) {
    align-items: center;
    display: flex;
    gap: 20px;
    margin-left: 20px;
  }
`

const NavLink = styled(BaseNavLink)`
  align-items: center;
  color: ${({ theme }) => theme.mainMenu.color};
  display: flex;
  font-size: 1.4rem;
  font-weight: 400;
  gap: 8px;
  line-height: 1.2;
  text-decoration: none;

  &.active {
    font-weight: 700;
  }

  &:hover {
    text-decoration: underline;
  }
`

export const MainMenu: React.FC = ({ ...restProps }) => {
  const t = useTranslations('mainMenu')

  return (
    <Wrapper {...restProps}>
      {sections.map(({ href, section }, index) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const title: any = section

        return (
          <NavLink href={href} key={`main_menu_item_${index}`}>
            {t(title)}
          </NavLink>
        )
      })}
    </Wrapper>
  )
}
