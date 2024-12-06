import { getTags } from '@/components/api/tags/index.ts';
import { useQuery } from '@tanstack/react-query';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Tags } from '../types/question.types.ts';
import { useNavigate, useSearchParams } from 'react-router-dom';

const TagSelector = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  const navigate = useNavigate();

  const { data: tags } = useQuery({
    queryKey: ['getTagsList'],
    queryFn: getTags,
  });

  const handleTags = (value: string[]) => {
    const path = [...value].join('&tags=');

    console.log('length', value.length);
    const tagsPath = value.length > 0 ? `tags=${path}` : '';
    const searchPath = search
      ? `?search=${search}&${tagsPath}`
      : value
        ? `?${tagsPath}`
        : '';
    navigate(searchPath);
  };

  return (
    <>
      {tags ? (
        <ToggleGroup
          variant='outline'
          type='multiple'
          className='items-start justify-start gap-2'
          size='sm'
          onValueChange={handleTags}
        >
          {tags.map((tag: Tags) => {
            return (
              <ToggleGroupItem
                value={tag.slug}
                key={tag.id}
                className='hover:bg-primary hover:text-white data-[state=on]:bg-primary data-[state=on]:text-white'
              >
                {tag.name}
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>
      ) : (
        <div>not found</div>
      )}
    </>
  );
};

export default TagSelector;