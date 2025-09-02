// import { source } from '@/lib/source';
// import { createFromSource } from 'fumadocs-core/search/server';
//
// export const { GET } = createFromSource(source, {
//   // https://docs.orama.com/open-source/supported-languages
//   language: 'english',
// });
import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// 정적 내보내기를 위한 설정
export const dynamic = 'force-static';

// 정적 검색을 위해 staticGET 사용
export const { staticGET: GET } = createFromSource(source);
