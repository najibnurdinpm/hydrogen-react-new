import {Link} from '@shopify/hydrogen/client';

/**
 * A client component that defines the navigation for a web storefront
 */
export default function Collection({collections}) {

    return (
        <ul className="standard-column__nav">
          {collections.map((collection, index) => (
            <li key={collection.id}>
              <Link
              to={`/collections/${collection.handle}`}
              className="block p-4 hover:opacity-80"
            >
              {collection.title}
            </Link>
              
            </li>
          ))}
        </ul>
    );
}
