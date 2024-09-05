"use client";

import { Box, Flex, Image, keyframes } from "@chakra-ui/react";

const moveLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`;

const imageUrls = [
  "https://get.musti.media/shops/mse/resources/ftp/original/0e/4d0d9dc2f5688e5c9932b8b3fb1a4a.png",
  "https://get.musti.media/shops/mse/resources/ftp/original/ab/rukka-ab.jpg",
  "https://get.musti.media/shops/mse/resources/ftp/original/30/royal-canin-veterinary-diets-30.png",
  "https://get.musti.media/shops/mse/resources/ftp/original/f2/pro-dog-f2.png",
  "https://get.musti.media/shops/mse/resources/ftp/original/a1/6fcef58811c5979ec0d2b84e0bac81.png",
  "https://get.musti.media/shops/mse/resources/ftp/original/88/7ecab3d5a22e70a8d2222512c2e099.png",
  "https://get.musti.media/shops/mse/resources/ftp/original/5b/bd7821cec3b18a7471eb478a486377.png",
  "https://get.musti.media/shops/mse/resources/ftp/original/bd/trixie-bd.jpg",
  "https://get.musti.media/shops/mse/resources/ftp/original/61/892b8402df9a3da9530f31660e94e9.png",
  "https://get.musti.media/shops/mse/resources/ftp/original/75/83b249dc5ec1cefc9c2e8fb485d150.png",
  "https://get.musti.media/shops/mse/resources/ftp/original/18/earth-rated-18.jpg",
  "https://get.musti.media/shops/mse/resources/ftp/original/09/7b142c75fab8ec32e8e8c097587a65.png",
  "https://get.musti.media/shops/mse/resources/ftp/original/0e/4d0d9dc2f5688e5c9932b8b3fb1a4a.png",
  "https://get.musti.media/shops/mse/resources/ftp/original/ab/rukka-ab.jpg",
  "https://get.musti.media/shops/mse/resources/ftp/original/30/royal-canin-veterinary-diets-30.png",
  "https://get.musti.media/shops/mse/resources/ftp/original/f2/pro-dog-f2.png",
  "https://get.musti.media/shops/mse/resources/ftp/original/a1/6fcef58811c5979ec0d2b84e0bac81.png",
  "https://get.musti.media/shops/mse/resources/ftp/original/88/7ecab3d5a22e70a8d2222512c2e099.png",
  "https://get.musti.media/shops/mse/resources/ftp/original/5b/bd7821cec3b18a7471eb478a486377.png",
  "https://get.musti.media/shops/mse/resources/ftp/original/bd/trixie-bd.jpg",
  "https://get.musti.media/shops/mse/resources/ftp/original/61/892b8402df9a3da9530f31660e94e9.png",
  "https://get.musti.media/shops/mse/resources/ftp/original/75/83b249dc5ec1cefc9c2e8fb485d150.png",
  "https://get.musti.media/shops/mse/resources/ftp/original/18/earth-rated-18.jpg",
  "https://get.musti.media/shops/mse/resources/ftp/original/09/7b142c75fab8ec32e8e8c097587a65.png",
];

export default function Partners() {
  return (
    <Flex
      overflow="hidden"
      width="100%"
      height="200px"
      position="relative"
      mt={12}
    >
      <Flex animation={`${moveLeft} 50s linear infinite`} width="100%">
        {imageUrls.map((src, i) => (
          <Box key={i} minWidth="200px" flexShrink={0} px={4}>
            <Image
              src={src}
              alt={`Image ${i + 1}`}
              maxH="200px"
              maxW="150px"
              objectFit="cover"
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
