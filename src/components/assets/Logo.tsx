import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  display: block;
  flex-shrink: 0;
`

export const Logo: React.FC<HTMLAttributes<SVGElement>> = ({ className, ...restProps }) => (
  <Wrapper
    className={`logo ${className}`}
    clipRule="evenodd"
    fillRule="evenodd"
    height="40"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    viewBox="0 0 260 260"
    width="40"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path d="M120 250h10v10h-10zM110 250h10v10h-10z" />
    <path d="M100 250h10.01v10H100zM140 240h10v10h-10zM130 240h10v10h-10z" />
    <path d="M120 240h10v10h-10zM110 240h10v10h-10z" fill="#df7126" />
    <path d="M100 240h10.01v10H100z" fill="#df7126" />
    <path d="M90 240h10v10H90zM80 240h10v10H80zM160 230h10v10h-10zM150 230h10v10h-10z" />
    <path d="M140 230h10v10h-10zM130 230h10v10h-10zM120 230h10v10h-10z" fill="#df7126" />
    <path d="M110 230h10v10h-10z" fill="#fbf236" />
    <path d="M100 230h10.01v10H100z" fill="#fbf236" />
    <path d="M90 230h10v10H90zM80 230h10v10H80z" fill="#df7126" />
    <path d="M70 230h10v10H70zM60 230h10v10H60zM180 220h10v10h-10zM170 220h10v10h-10z" />
    <path
      d="M160 220h10v10h-10zM150 220h10v10h-10zM140 220h10v10h-10zM130 220h10v10h-10z"
      fill="#df7126"
    />
    <path d="M120 220h10v10h-10zM110 220h10v10h-10z" fill="#fbf236" />
    <path d="M100 220h10.01v10H100zM90 220h10v10H90zM80 220h10v10H80z" fill="#fbf236" />
    <path d="M70 220h10v10H70zM60 220h10v10H60z" fill="#df7126" />
    <path d="M50 220h10v10H50zM40 220h10v10H40zM200 210h10v10h-10z" />
    <path d="M190 210h10.01v10H190z" />
    <path
      d="M180 210h10v10h-10zM170 210h10v10h-10zM160 210h10v10h-10zM150 210h10v10h-10z"
      fill="#df7126"
    />
    <path
      d="M140 210h10v10h-10zM130 210h10v10h-10zM120 210h10v10h-10zM110 210h10v10h-10z"
      fill="#fbf236"
    />
    <path
      d="M100 210h10.01v10H100zM90 210h10v10H90zM80 210h10v10H80zM70 210h10v10H70zM60 210h10v10H60z"
      fill="#fbf236"
    />
    <path d="M50 210h10v10H50zM40 210h10v10H40z" fill="#df7126" />
    <path d="M30 210h10v10H30zM20 210h10v10H20zM210 199.99h10V210h-10z" />
    <path d="M200 199.99h10V210h-10z" fill="#df7126" />
    <path
      d="M190 199.99h10.01V210H190zM180 199.99h10V210h-10zM170 199.99h10V210h-10z"
      fill="#df7126"
    />
    <path d="M160 199.99h10V210h-10zM150 199.99h10V210h-10z" fill="#fff" />
    <path
      d="M140 199.99h10V210h-10zM130 199.99h10V210h-10zM120 199.99h10V210h-10zM110 199.99h10V210h-10z"
      fill="#fbf236"
    />
    <path
      d="M100 199.99h10.01V210H100zM90 199.99h10V210H90zM80 199.99h10V210H80zM70 199.99h10V210H70zM60 199.99h10V210H60zM50 199.99h10V210H50zM40 199.99h10V210H40z"
      fill="#fbf236"
    />
    <path d="M30 199.99h10V210H30zM20 199.99h10V210H20z" fill="#df7126" />
    <path d="M10 199.99h10.01V210H10zM220 190h10v10h-10z" />
    <path d="M210 190h10v10h-10zM200 190h10v10h-10z" fill="#df7126" />
    <path d="M190 190h10.01v10H190z" fill="#df7126" />
    <path d="M180 190h10v10h-10zM170 190h10v10h-10z" fill="#fbf236" />
    <path d="M160 190h10v10h-10zM150 190h10v10h-10zM140 190h10v10h-10z" fill="#fff" />
    <path d="M130 190h10v10h-10zM120 190h10v10h-10zM110 190h10v10h-10z" fill="#fbf236" />
    <path d="M100 190h10.01v10H100zM90 190h10v10H90zM80 190h10v10H80z" fill="#fbf236" />
    <path d="M70 190h10v10H70z" />
    <path
      d="M60 190h10v10H60zM50 190h10v10H50zM40 190h10v10H40zM30 190h10v10H30zM20 190h10v10H20z"
      fill="#fbf236"
    />
    <path d="M10 190h10.01v10H10z" fill="#df7126" />
    <path d="M0 190h10v10H0zM220 180h10v10h-10z" />
    <path d="M210 180h10v10h-10zM200 180h10v10h-10z" fill="#df7126" />
    <path d="M190 180h10.01v10H190z" fill="#fff" />
    <path d="M180 180h10v10h-10z" fill="#fbf236" />
    <path d="M170 180h10v10h-10z" />
    <path d="M160 180h10v10h-10z" fill="#fbf236" />
    <path d="M150 180h10v10h-10zM140 180h10v10h-10zM130 180h10v10h-10z" fill="#fff" />
    <path d="M120 180h10v10h-10zM110 180h10v10h-10z" fill="#fbf236" />
    <path d="M100 180h10.01v10H100zM90 180h10v10H90zM80 180h10v10H80z" fill="#fbf236" />
    <path d="M70 180h10v10H70z" />
    <path
      d="M60 180h10v10H60zM50 180h10v10H50zM40 180h10v10H40zM30 180h10v10H30zM20 180h10v10H20z"
      fill="#fbf236"
    />
    <path d="M10 180h10.01v10H10z" fill="#fff" />
    <path d="M0 180h10v10H0zM220 170h10v10h-10z" />
    <path d="M210 170h10v10h-10zM200 170h10v10h-10z" fill="#df7126" />
    <path d="M190 170h10.01v10H190zM180 170h10v10h-10z" fill="#fff" />
    <path d="M170 170h10v10h-10z" />
    <path d="M160 170h10v10h-10zM150 170h10v10h-10z" fill="#fbf236" />
    <path d="M140 170h10v10h-10zM130 170h10v10h-10zM120 170h10v10h-10z" fill="#fff" />
    <path d="M110 170h10v10h-10z" fill="#fbf236" />
    <path d="M100 170h10.01v10H100zM90 170h10v10H90zM80 170h10v10H80z" fill="#fbf236" />
    <path d="M70 170h10v10H70z" />
    <path d="M60 170h10v10H60zM50 170h10v10H50zM40 170h10v10H40zM30 170h10v10H30z" fill="#fbf236" />
    <path d="M20 170h10v10H20z" />
    <path d="M10 170h10.01v10H10z" fill="#fff" />
    <path d="M0 170h10v10H0zM220 160h10v10h-10z" />
    <path d="M210 160h10v10h-10zM200 160h10v10h-10z" fill="#df7126" />
    <path d="M190 160h10.01v10H190z" fill="#fbf236" />
    <path d="M180 160h10v10h-10z" fill="#fff" />
    <path d="M170 160h10v10h-10z" />
    <path d="M160 160h10v10h-10zM150 160h10v10h-10zM140 160h10v10h-10z" fill="#fbf236" />
    <path d="M130 160h10v10h-10zM120 160h10v10h-10zM110 160h10v10h-10z" fill="#fff" />
    <path d="M100 160h10.01v10H100zM90 160h10v10H90zM80 160h10v10H80z" fill="#fbf236" />
    <path d="M70 160h10v10H70z" />
    <path d="M60 160h10v10H60zM50 160h10v10H50zM40 160h10v10H40zM30 160h10v10H30z" fill="#fbf236" />
    <path d="M20 160h10v10H20z" />
    <path d="M10 160h10.01v10H10z" fill="#fff" />
    <path d="M0 160h10v10H0zM220 150h10v10h-10z" />
    <path d="M210 150h10v10h-10zM200 150h10v10h-10z" fill="#df7126" />
    <path d="M190 150h10.01v10H190zM180 150h10v10h-10z" fill="#fbf236" />
    <path d="M170 150h10v10h-10z" />
    <path d="M160 150h10v10h-10z" fill="#fff" />
    <path d="M150 150h10v10h-10zM140 150h10v10h-10zM130 150h10v10h-10z" fill="#fbf236" />
    <path d="M120 150h10v10h-10zM110 150h10v10h-10z" fill="#fff" />
    <path d="M100 150h10.01v10H100z" fill="#fff" />
    <path d="M90 150h10v10H90zM80 150h10v10H80z" fill="#fbf236" />
    <path d="M70 150h10v10H70z" />
    <path d="M60 150h10v10H60zM50 150h10v10H50zM40 150h10v10H40zM30 150h10v10H30z" fill="#fbf236" />
    <path d="M20 150h10v10H20z" />
    <path d="M10 150h10.01v10H10z" fill="#fff" />
    <path d="M0 150h10v10H0zM220 140h10v10h-10z" />
    <path d="M210 140h10v10h-10zM200 140h10v10h-10z" fill="#df7126" />
    <path d="M190 140h10.01v10H190zM180 140h10v10h-10z" fill="#fbf236" />
    <path d="M170 140h10v10h-10z" />
    <path d="M160 140h10v10h-10zM150 140h10v10h-10z" fill="#fff" />
    <path d="M140 140h10v10h-10zM130 140h10v10h-10zM120 140h10v10h-10z" fill="#fbf236" />
    <path d="M110 140h10v10h-10z" fill="#fff" />
    <path d="M100 140h10.01v10H100zM90 140h10v10H90z" fill="#fff" />
    <path d="M80 140h10v10H80z" fill="#fbf236" />
    <path d="M70 140h10v10H70z" />
    <path d="M60 140h10v10H60zM50 140h10v10H50zM40 140h10v10H40zM30 140h10v10H30z" fill="#fbf236" />
    <path d="M20 140h10v10H20z" />
    <path d="M10 140h10.01v10H10z" fill="#fff" />
    <path d="M0 140h10v10H0zM220 130h10v10h-10z" />
    <path d="M210 130h10v10h-10zM200 130h10v10h-10z" fill="#df7126" />
    <path d="M190 130h10.01v10H190zM180 130h10v10h-10z" fill="#fbf236" />
    <path d="M170 130h10v10h-10z" />
    <path d="M160 130h10v10h-10z" fill="#fbf236" />
    <path d="M150 130h10v10h-10zM140 130h10v10h-10z" fill="#fff" />
    <path d="M130 130h10v10h-10zM120 130h10v10h-10zM110 130h10v10h-10z" fill="#fbf236" />
    <path d="M100 130h10.01v10H100zM90 130h10v10H90zM80 130h10v10H80z" fill="#fff" />
    <path d="M70 130h10v10H70z" />
    <path d="M60 130h10v10H60z" fill="#fbf236" />
    <path d="M50 130h10v10H50z" />
    <path d="M40 130h10v10H40zM30 130h10v10H30z" fill="#fbf236" />
    <path d="M20 130h10v10H20z" />
    <path d="M10 130h10.01v10H10z" fill="#fff" />
    <path d="M0 130h10v10H0zM220 120h10v10h-10z" />
    <path d="M210 120h10v10h-10zM200 120h10v10h-10z" fill="#df7126" />
    <path d="M190 120h10.01v10H190zM180 120h10v10h-10z" fill="#fbf236" />
    <path d="M170 120h10v10h-10z" />
    <path d="M160 120h10v10h-10zM150 120h10v10h-10z" fill="#fbf236" />
    <path d="M140 120h10v10h-10zM130 120h10v10h-10z" fill="#fff" />
    <path d="M120 120h10v10h-10zM110 120h10v10h-10z" />
    <path d="M100 120h10.01v10H100zM90 120h10v10H90zM80 120h10v10H80zM70 120h10v10H70z" />
    <path d="M60 120h10v10H60z" fill="#fbf236" />
    <path d="M50 120h10v10H50z" />
    <path d="M40 120h10v10H40zM30 120h10v10H30z" fill="#fbf236" />
    <path d="M20 120h10v10H20z" />
    <path d="M10 120h10.01v10H10z" fill="#fff" />
    <path d="M0 120h10v10H0zM220 109.99h10V120h-10z" />
    <path d="M210 109.99h10V120h-10zM200 109.99h10V120h-10z" fill="#df7126" />
    <path d="M190 109.99h10.01V120H190zM180 109.99h10V120h-10z" fill="#fbf236" />
    <path d="M170 109.99h10V120h-10z" />
    <path
      d="M160 109.99h10V120h-10zM150 109.99h10V120h-10zM140 109.99h10V120h-10z"
      fill="#fbf236"
    />
    <path d="M130 109.99h10V120h-10zM120 109.99h10V120h-10z" fill="#fff" />
    <path d="M110 109.99h10V120h-10z" fill="#fbf236" />
    <path d="M100 109.99h10.01V120H100zM90 109.99h10V120H90z" fill="#fbf236" />
    <path d="M80 109.99h10V120H80z" fill="#fff" />
    <path d="M70 109.99h10V120H70z" />
    <path d="M60 109.99h10V120H60z" fill="#fff" />
    <path d="M50 109.99h10V120H50zM40 109.99h10V120H40z" />
    <path d="M30 109.99h10V120H30z" fill="#fbf236" />
    <path d="M20 109.99h10V120H20z" />
    <path d="M10 109.99h10.01V120H10z" fill="#fff" />
    <path d="M0 109.99h10V120H0zM220 100h10v10h-10z" />
    <path d="M210 100h10v10h-10zM200 100h10v10h-10z" fill="#df7126" />
    <path d="M190 100h10.01v10H190zM180 100h10v10h-10z" fill="#fbf236" />
    <path d="M170 100h10v10h-10z" />
    <path
      d="M160 100h10v10h-10zM150 100h10v10h-10zM140 100h10v10h-10zM130 100h10v10h-10z"
      fill="#fbf236"
    />
    <path d="M120 100h10v10h-10zM110 100h10v10h-10z" fill="#fff" />
    <path d="M100 100h10.01v10H100zM90 100h10v10H90zM80 100h10v10H80z" fill="#fbf236" />
    <path d="M70 100h10v10H70z" />
    <path d="M60 100h10v10H60z" fill="#fff" />
    <path d="M50 100h10v10H50z" />
    <path d="M40 100h10v10H40z" fill="#fbf236" />
    <path d="M30 100h10v10H30zM20 100h10v10H20z" />
    <path d="M10 100h10.01v10H10z" fill="#fff" />
    <path d="M0 100h10v10H0zM220 90h10v10h-10z" />
    <path d="M210 90h10v10h-10zM200 90h10v10h-10z" fill="#df7126" />
    <path d="M190 90h10.01v10H190zM180 90h10v10h-10z" fill="#fbf236" />
    <path d="M170 90h10v10h-10z" />
    <path
      d="M160 90h10v10h-10zM150 90h10v10h-10zM140 90h10v10h-10zM130 90h10v10h-10zM120 90h10v10h-10z"
      fill="#fbf236"
    />
    <path d="M110 90h10v10h-10z" fill="#fff" />
    <path d="M100 90h10.01v10H100z" fill="#fff" />
    <path d="M90 90h10v10H90zM80 90h10v10H80z" fill="#fbf236" />
    <path d="M70 90h10v10H70z" />
    <path d="M60 90h10v10H60z" fill="#fff" />
    <path d="M50 90h10v10H50z" />
    <path d="M40 90h10v10H40z" fill="#fff" />
    <path d="M30 90h10v10H30z" fill="#fbf236" />
    <path d="M20 90h10v10H20z" />
    <path d="M10 90h10.01v10H10z" fill="#fff" />
    <path d="M0 90h10v10H0zM220 80h10v10h-10z" />
    <path d="M210 80h10v10h-10zM200 80h10v10h-10z" fill="#df7126" />
    <path d="M190 80h10.01v10H190zM180 80h10v10h-10z" fill="#fbf236" />
    <path d="M170 80h10v10h-10z" />
    <path
      d="M160 80h10v10h-10zM150 80h10v10h-10zM140 80h10v10h-10zM130 80h10v10h-10zM120 80h10v10h-10zM110 80h10v10h-10z"
      fill="#fbf236"
    />
    <path d="M100 80h10.01v10H100zM90 80h10v10H90z" fill="#fff" />
    <path d="M80 80h10v10H80z" fill="#fbf236" />
    <path d="M70 80h10v10H70z" />
    <path d="M60 80h10v10H60z" fill="#fbf236" />
    <path d="M50 80h10v10H50z" />
    <path d="M40 80h10v10H40zM30 80h10v10H30z" fill="#fff" />
    <path d="M20 80h10v10H20z" />
    <path d="M10 80h10.01v10H10z" fill="#fff" />
    <path d="M0 80h10v10H0zM220 70h10v10h-10z" />
    <path d="M210 70h10v10h-10z" fill="#df7126" />
    <path d="M200 70h10v10h-10z" />
    <path d="M190 70h10.01v10H190z" />
    <path d="M180 70h10v10h-10z" fill="#fbf236" />
    <path d="M170 70h10v10h-10z" />
    <path
      d="M160 70h10v10h-10zM150 70h10v10h-10zM140 70h10v10h-10zM130 70h10v10h-10zM120 70h10v10h-10zM110 70h10v10h-10z"
      fill="#fbf236"
    />
    <path d="M100 70h10.01v10H100z" fill="#fbf236" />
    <path d="M90 70h10v10H90zM80 70h10v10H80z" fill="#fff" />
    <path d="M70 70h10v10H70z" />
    <path d="M60 70h10v10H60z" fill="#fbf236" />
    <path d="M50 70h10v10H50z" />
    <path d="M40 70h10v10H40zM30 70h10v10H30zM20 70h10v10H20z" fill="#fff" />
    <path d="M10 70h10.01v10H10z" fill="#fff" />
    <path d="M0 70h10v10H0zM220 60h10v10h-10z" />
    <path d="M210 60h10v10h-10zM200 60h10v10h-10z" fill="#df7126" />
    <path d="M190 60h10.01v10H190z" fill="#fbf236" />
    <path d="M180 60h10v10h-10zM170 60h10v10h-10z" />
    <path
      d="M160 60h10v10h-10zM150 60h10v10h-10zM140 60h10v10h-10zM130 60h10v10h-10zM120 60h10v10h-10zM110 60h10v10h-10z"
      fill="#fbf236"
    />
    <path d="M100 60h10.01v10H100zM90 60h10v10H90z" fill="#fbf236" />
    <path d="M80 60h10v10H80z" fill="#fff" />
    <path d="M70 60h10v10H70z" />
    <path d="M60 60h10v10H60z" fill="#fbf236" />
    <path d="M50 60h10v10H50z" />
    <path d="M40 60h10v10H40z" fill="#fbf236" />
    <path d="M30 60h10v10H30zM20 60h10v10H20z" fill="#fff" />
    <path d="M10 60h10.01v10H10z" fill="#fff" />
    <path d="M0 60h10v10H0zM210 50h10v10h-10z" />
    <path d="M200 50h10v10h-10z" fill="#fff" />
    <path d="M190 50h10.01v10H190z" fill="#fff" />
    <path d="M180 50h10v10h-10zM170 50h10v10h-10z" fill="#fbf236" />
    <path d="M160 50h10v10h-10zM150 50h10v10h-10z" />
    <path
      d="M140 50h10v10h-10zM130 50h10v10h-10zM120 50h10v10h-10zM110 50h10v10h-10z"
      fill="#fbf236"
    />
    <path d="M100 50h10.01v10H100zM90 50h10v10H90zM80 50h10v10H80z" fill="#fbf236" />
    <path d="M70 50h10v10H70z" />
    <path d="M60 50h10v10H60z" fill="#fff" />
    <path d="M50 50h10v10H50z" />
    <path d="M40 50h10v10H40z" fill="#fbf236" />
    <path d="M30 50h10v10H30zM20 50h10v10H20z" fill="#fff" />
    <path d="M10 50h10.01v10H10zM200 40h10v10h-10z" />
    <path d="M190 40h10.01v10H190z" />
    <path d="M180 40h10v10h-10zM170 40h10v10h-10z" fill="#fff" />
    <path d="M160 40h10v10h-10zM150 40h10v10h-10z" fill="#fbf236" />
    <path d="M140 40h10v10h-10zM130 40h10v10h-10z" />
    <path d="M120 40h10v10h-10zM110 40h10v10h-10z" fill="#fbf236" />
    <path d="M100 40h10.01v10H100z" fill="#fbf236" />
    <path d="M90 40h10v10H90zM80 40h10v10H80z" />
    <path d="M70 40h10v10H70z" fill="#fbf236" />
    <path d="M60 40h10v10H60zM50 40h10v10H50zM40 40h10v10H40z" fill="#fff" />
    <path d="M30 40h10v10H30zM20 40h10v10H20zM180 30h10v10h-10zM170 30h10v10h-10z" />
    <path d="M160 30h10v10h-10zM150 30h10v10h-10z" fill="#fff" />
    <path d="M140 30h10v10h-10zM130 30h10v10h-10z" fill="#fbf236" />
    <path d="M120 30h10v10h-10zM110 30h10v10h-10z" />
    <path d="M100 30h10.01v10H100z" />
    <path d="M90 30h10v10H90zM80 30h10v10H80z" fill="#fbf236" />
    <path d="M70 30h10v10H70zM60 30h10v10H60z" fill="#fff" />
    <path d="M50 30h10v10H50zM40 30h10v10H40zM160 19.99h10V30h-10zM150 19.99h10V30h-10z" />
    <path d="M140 19.99h10V30h-10zM130 19.99h10V30h-10z" fill="#fff" />
    <path d="M120 19.99h10V30h-10zM110 19.99h10V30h-10z" fill="#fbf236" />
    <path d="M100 19.99h10.01V30H100z" fill="#fbf236" />
    <path d="M90 19.99h10V30H90zM80 19.99h10V30H80z" fill="#fff" />
    <path d="M70 19.99h10V30H70zM60 19.99h10V30H60zM140 10h10v10h-10zM130 10h10v10h-10z" />
    <path d="M120 10h10v10h-10zM110 10h10v10h-10z" fill="#fff" />
    <path d="M100 10h10.01v10H100z" fill="#fff" />
    <path d="M90 10h10v10H90zM80 10h10v10H80zM120 0h10v10h-10zM110 0h10v10h-10z" />
    <path d="M100 0h10.01v10H100z" />
  </Wrapper>
)
