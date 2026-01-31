'use client'

export function YandexMap() {
  return (
    <section id="map">
      <iframe
        loading="lazy"
        src="https://yandex.ru/map-widget/v1/?ll=37.504444%2C55.938851&amp;mode=routes&amp;rtext=55.940034%2C37.520034~55.937573%2C37.489482&amp;rtt=pd&amp;ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__lh_9600766~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjgxODMyMRJ00KDQvtGB0YHQuNGPLCDQnNC%2B0YHQutC%2B0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0JTQvtC70LPQvtC%2F0YDRg9C00L3Ri9C5LCDQm9C40YXQsNGH0ZHQstGB0LrQvtC1INGI0L7RgdGB0LUsIDHQujQiCg069RVCFRPAX0I%3D&amp;z=15"
        allowFullScreen
        className="w-full h-96 relative"
      ></iframe>
    </section>
  )
}
