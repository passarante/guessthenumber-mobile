import { router, Stack } from 'expo-router';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function Home() {
  const gotoDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Onboarding
        pages={[
          {
            backgroundColor: '#000',
            image: (
              <Image
                source={require('assets/images/onboarding-1.jpg')}
                style={{ width: '90%', height: '50%' }}
              />
            ),
            title: 'Sayı Bulmaca',
            subtitle: 'Sayı tahmin oyunu',
          },
          {
            backgroundColor: '#000',
            image: (
              <Image
                source={require('assets/images/onboarding-2.jpg')}
                style={{ width: '90%', height: '50%' }}
              />
            ),
            title: 'Nasıl Oynanır:',
            subtitle:
              'Rakamları birbirinden farklı 4 haneli bir sayıyı tahmin etmelisiniz. * Yaptığınız tahminler solda görünecektir. Doğru sayıyı bulabilmeniz için size tahmininizle ilgili bilgi veriyoruz. * Tahmininizdeki yeri doğru olan rakamları yeşil kutuda gösteriyoruz. * Tahmininizdeki doğru olan ancak yeri doğru olmayan rakamları kırmızı kutuda gösteriyoruz. * Tahminlerinizi ve skorlarınızı kaydetmek için üye olmalısınız.* Üye olduğunuzda çoklu oyun açarak rakiplerinize karşı oynayabilirsiniz.',
          },
          {
            backgroundColor: '#000',
            image: (
              <Image
                source={require('assets/images/onboarding-2.jpg')}
                style={{ width: '90%', height: '50%' }}
              />
            ),
            title: 'Hemen Başlayın:',
            subtitle:
              'Hemen başlayıp kendi kendinize oynayabilirsiniz. Üye olursanız karşılıklı oyuncularla da oynayabilir. Oyun geçmişinizi görebilirsiniz. ',
          },
        ]}
        onDone={gotoDashboard}
        onSkip={gotoDashboard}
      />
    </>
  );
}
