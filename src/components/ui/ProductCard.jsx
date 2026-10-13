import React from 'react';
import { Badge } from './Badge';
import { Button } from './Button';
import { Star, ShoppingCart, Eye } from 'lucide-react';

export function ProductCard({ product, onAddToCart, onViewDetails }) {
  const {
    title,
    category,
    price,
    rating,
    reviews,
    badge,
    badgeVariant = 'blue',
    inStock = true,
    stockCount = 0,
    image,
    description,
  } = product;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      {/* Image Container with group-hover zoom (Slide 16) */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Badge in top corner */}
        {badge && (
          <div className="absolute top-3 left-3">
            <Badge variant={badgeVariant}>{badge}</Badge>
          </div>
        )}

        {/* Quick View Button overlay */}
        <button
          type="button"
          onClick={() => onViewDetails && onViewDetails(product)}
          className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-xl bg-white/90 text-slate-700 opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-blue-600 group-hover:opacity-100 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-blue-500"
          title="Ver Detalhes"
          aria-label={`Ver detalhes de ${title}`}
        >
          <Eye className="size-4" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col pt-4">
        {/* Category & Rating */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span className="font-medium uppercase tracking-wider">{category}</span>
          <div className="flex items-center gap-1 font-semibold text-amber-600 dark:text-amber-400">
            <Star className="size-3.5 fill-amber-500 text-amber-500" />
            <span>{rating}</span>
            <span className="text-slate-400">({reviews})</span>
          </div>
        </div>

        {/* Title with group-hover text color (Slide 16) */}
        <h3 className="mt-2 text-base font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 line-clamp-1">
          {title}
        </h3>

        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Price & Action */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <div>
            <span className="block text-[11px] font-medium text-slate-400 uppercase tracking-wider">Preço</span>
            <span className="text-lg font-black text-slate-900 dark:text-white">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}
            </span>
          </div>

          <Button
            size="sm"
            variant={inStock ? 'primary' : 'secondary'}
            disabled={!inStock}
            onClick={() => onAddToCart && onAddToCart(product)}
            icon={ShoppingCart}
          >
            {inStock ? 'Comprar' : 'Esgotado'}
          </Button>
        </div>
      </div>
    </article>
  );
}
