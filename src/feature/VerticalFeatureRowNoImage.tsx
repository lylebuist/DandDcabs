import className from 'classnames';

type IVerticalFeatureRowNoImageProps = {
  title: string;
  reverse?: boolean;
};

const VerticalFeatureRowNoImage = (props: IVerticalFeatureRowNoImageProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center">
        <h3 className="text-4xl text-gray-900">{props.title}</h3>
        <div className="pt-10 text-2xl">
          <div style={{ float: 'left', width: '332px' }}>
            <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
            <p>
              I had a very long travel from Edinburgh Airport to Kirriemuir via
              bus and I was so pleased to see a taxi in Kirriemuir at such late
              hours. Donald was my hero that night, he helped me with my luggage
              and had great chat on my way to Glen Prosen. Super friendly. Thank
              you Donald, if your services were not available I would have been
              stranded. Will definitely use your services again when I need to
              visit my gran in the future.
            </p>
            <p>-Briony Palmgreen</p>
          </div>
          <div style={{ float: 'left', width: '332px' }}>
            <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
            <p>
              Wonderful experience. Lovely driver and always arrived early. Took
              a massive weight off our shoulders as we were getting a taxi from
              a pretty remote area.
            </p>
            <p>-Chloe Alexandra Hardwick</p>
          </div>
          <div style={{ float: 'left', width: '332px' }}>
            <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
            <p>
              Excellent prompt service. I now use Donald all the time for my
              Airport transfers for business. Very professional safe driver,
              always on time and delivers you to destination in plenty time for
              my flights, Good rates and friendly conversations. Would highly
              recommend his services, 10 out of 10
            </p>
            <p>-Brian Ramage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatureRowNoImage };
