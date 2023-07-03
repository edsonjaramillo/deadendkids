type JSONLDScriptProps = {
  data: any;
};

export default function JSONLDScript({ data }: JSONLDScriptProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
